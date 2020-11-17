using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace AnnoXMLParser {
    class Program {
        static void Main(string[] args) {
            string assetsXmlPath = @"C:\Path\assets.xml";
            string outputFolder = @"C:\Path\";


            XDocument doc = XDocument.Load(assetsXmlPath);
            Stack<XElement> queue = new Stack<XElement>(doc.Elements());
            List<XElement> factoryXMLs = new List<XElement>();
            List<XElement> productXMLs = new List<XElement>();
            List<XElement> populationXMLs = new List<XElement>();
            List<XElement> newWorldVariants = new List<XElement>();

            while (queue.Any()) {
                var element = queue.Pop();

                if (element.Name == "Template" && (
                    element.Value == "FactoryBuilding7"
                        || element.Value == "FactoryBuilding7_Arctic"
                        || element.Value == "FarmBuilding"
                        || element.Value == "FarmBuilding_Arctic"
                        || element.Value == "HeavyFactoryBuilding"
                        || element.Value == "PublicServiceBuilding"
                        || element.Value == "SlotFactoryBuilding7"
                        || element.Value == "FreeAreaBuilding"
                )) {
                    factoryXMLs.Add(element.Parent);
                }

                if (element.Name == "Template" && element.Value == "Product") {
                    productXMLs.Add(element.Parent);
                }

                if (element.Name == "Template" && element.Value == "PopulationLevel7") {
                    populationXMLs.Add(element.Parent);
                }

                if (element.Name == "BaseAssetGUID") {
                    newWorldVariants.Add(element.Parent);
                }

                foreach (var add in element.Elements()) {
                    queue.Push(add);
                }
            }

            var products = new List<Product>();
            foreach (var productXML in productXMLs) {
                int id = int.Parse(productXML.Elements()
                    .Single(x => x.Name == "Values").Elements()
                    .Single(x => x.Name == "Standard").Elements()
                    .Single(x => x.Name == "GUID").Value);
                string name = productXML.Elements()
                    .Single(x => x.Name == "Values").Elements()
                    .Single(x => x.Name == "Text").Elements()
                    .Single(x => x.Name == "LocaText").Elements()
                    .Single(x => x.Name == "English").Elements()
                    .Single(x => x.Name == "Text").Value;

                products.Add(new Product { ID = id, Name = name });
            }

            var factories = new List<Factory>();
            foreach (var factoryXML in factoryXMLs) {
                bool isPublicService = factoryXML.Elements().Single(x => x.Name == "Template").Value == "PublicServiceBuilding";

                int id = int.Parse(factoryXML.Elements()
                    .Single(x => x.Name == "Values").Elements()
                    .Single(x => x.Name == "Standard").Elements()
                    .Single(x => x.Name == "GUID").Value);

                int cycleTime = int.Parse(factoryXML.Elements()
                    ?.SingleOrDefault(x => x.Name == "Values")?.Elements()
                    ?.SingleOrDefault(x => x.Name == "FactoryBase")?.Elements()
                    ?.SingleOrDefault(x => x.Name == "CycleTime")?.Value ?? "0");

                string name = factoryXML.Elements()
                    .Single(x => x.Name == "Values").Elements()
                    .Single(x => x.Name == "Text").Elements()
                    .Single(x => x.Name == "LocaText").Elements()
                    .Single(x => x.Name == "English").Elements()
                    .Single(x => x.Name == "Text").Value;

                List<FactoryIngredient> inputs = new List<FactoryIngredient>();

                if (!isPublicService) {
                    var inputXMLs = factoryXML.Elements()
                        ?.SingleOrDefault(x => x.Name == "Values")?.Elements()
                        ?.SingleOrDefault(x => x.Name == "FactoryBase")?.Elements()
                        ?.SingleOrDefault(x => x.Name == "FactoryInputs")?.Elements();

                    foreach (var inputXML in inputXMLs ?? Enumerable.Empty<XElement>()) {
                        int productID = int.Parse(inputXML.Elements()
                            .Single(x => x.Name == "Product")
                            .Value);

                        int amount = int.Parse(inputXML.Elements()
                            .Single(x => x.Name == "Amount")
                            .Value);

                        inputs.Add(new FactoryIngredient() { ProductID = productID, Amount = amount });
                    }
                }

                List<FactoryIngredient> outputs = new List<FactoryIngredient>();
                if (isPublicService) {
                    var outputXMLs = factoryXML.Elements()
                        ?.SingleOrDefault(x => x.Name == "Values")?.Elements()
                        ?.SingleOrDefault(x => x.Name == "PublicService")?.Elements()
                        ?.SingleOrDefault(x => x.Name == "PublicServiceOutputs")?.Elements();

                    foreach (var outputXML in outputXMLs ?? Enumerable.Empty<XElement>()) {
                        int productID = int.Parse(outputXML.Elements()
                            .Single(x => x.Name == "Product")
                            .Value);                        

                        outputs.Add(new FactoryIngredient() { ProductID = productID, Amount = 0 });
                    }
                }
                else {
                    var outputXMLs = factoryXML.Elements()
                        ?.SingleOrDefault(x => x.Name == "Values")?.Elements()
                        ?.SingleOrDefault(x => x.Name == "FactoryBase")?.Elements()
                        ?.SingleOrDefault(x => x.Name == "FactoryOutputs")?.Elements();

                    foreach (var outputXML in outputXMLs ?? Enumerable.Empty<XElement>()) {
                        int productID = int.Parse(outputXML.Elements()
                            .Single(x => x.Name == "Product")
                            .Value);

                        int amount = int.Parse(outputXML.Elements()
                            .Single(x => x.Name == "Amount")
                            .Value);

                        outputs.Add(new FactoryIngredient() { ProductID = productID, Amount = amount });
                    }
                }                
                
                var factory = new Factory() { ID = id, Name = name, CycleTime = cycleTime, Inputs = inputs.ToArray(), Outputs = outputs.ToArray() };

                string associatedRegions = factoryXML.Elements()
                    ?.SingleOrDefault(x => x.Name == "Values")?.Elements()
                    ?.SingleOrDefault(x => x.Name == "Building")?.Elements()
                    ?.SingleOrDefault(x => x.Name == "AssociatedRegions")?.Value ?? "";

                if (associatedRegions.IndexOf("Moderate", StringComparison.OrdinalIgnoreCase) >= 0) {
                    factory.IsOldWorld = true;
                }

                if (associatedRegions.IndexOf("Colony01", StringComparison.OrdinalIgnoreCase) >= 0) {
                    factory.IsNewWorld = true;
                }

                factories.Add(factory);
            }

            var populationLevels = new List<PopulationLevel>();
            foreach (var populationXML in populationXMLs) {
                string name = populationXML.Elements()
                    .Single(x => x.Name == "Values").Elements()
                    .Single(x => x.Name == "Text").Elements()
                    .Single(x => x.Name == "LocaText").Elements()
                    .Single(x => x.Name == "English").Elements()
                    .Single(x => x.Name == "Text").Value;

                var inputXMLs = populationXML.Elements()
                    .Single(x => x.Name == "Values").Elements()
                    .Single(x => x.Name == "PopulationLevel7").Elements()
                    .Single(x => x.Name == "PopulationInputs").Elements();

                List<PopulationInput> inputs = new List<PopulationInput>();
                foreach (var inputXML in inputXMLs) {
                    string sProductID = inputXML.Elements().SingleOrDefault(x => x.Name == "Product")?.Value;
                    string sSupplyWeight = inputXML.Elements().SingleOrDefault(x => x.Name == "SupplyWeight")?.Value;
                    string sAmount = inputXML.Elements().SingleOrDefault(x => x.Name == "Amount")?.Value;
                    string sMoneyValue = inputXML.Elements().SingleOrDefault(x => x.Name == "MoneyValue")?.Value;

                    if (!string.IsNullOrEmpty(sProductID) && (!string.IsNullOrEmpty(sAmount) || !string.IsNullOrEmpty(sSupplyWeight))) {
                        PopulationInput input = new PopulationInput() { ProductID = int.Parse(sProductID) };
                        inputs.Add(input);

                        if (!string.IsNullOrEmpty(sAmount)) {
                            decimal amount = 0m;
                            if (!decimal.TryParse(sAmount, out amount)) {
                                amount = decimal.Parse(sAmount, System.Globalization.NumberStyles.Float);
                            }
                            input.Amount = amount;
                        }

                        if (!string.IsNullOrEmpty(sSupplyWeight)) {
                            input.SupplyWeight = int.Parse(sSupplyWeight);
                        }

                        if (!string.IsNullOrEmpty(sMoneyValue)) {
                            input.MoneyValue = int.Parse(sMoneyValue);
                        }
                    }
                }

                populationLevels.Add(new PopulationLevel() { Name = name, Inputs = inputs.ToArray() });
            }

            foreach (var variantXML in newWorldVariants) {
                string baseIDString = variantXML.Elements()
                    .Single(x => x.Name == "BaseAssetGUID").Value;

                if (!int.TryParse(baseIDString, out int baseID)) {
                    continue;
                }

                var baseFactory = factories.SingleOrDefault(x => x.ID == baseID);
                if (baseFactory == null) {
                    continue;
                }

                int newID = int.Parse(variantXML.Elements()
                    .Single(x => x.Name == "Values").Elements()
                    .Single(x => x.Name == "Standard").Elements()
                    .Single(x => x.Name == "GUID").Value);

                var newFactory = new Factory() {
                    ID = newID,
                    Name = baseFactory.Name,
                    CycleTime = baseFactory.CycleTime,
                    Inputs = baseFactory.Inputs,
                    Outputs = baseFactory.Outputs,
                    IsNewWorld = true,
                    IsOldWorld = false
                };

                string newCycleTimeString = variantXML.Elements()
                    ?.SingleOrDefault(x => x.Name == "Values")?.Elements()
                    ?.SingleOrDefault(x => x.Name == "FactoryBase")?.Elements()
                    ?.SingleOrDefault(x => x.Name == "CycleTime")?.Value;

                if (!string.IsNullOrEmpty(newCycleTimeString) && int.TryParse(newCycleTimeString, out int newCycleTime)) {
                    newFactory.CycleTime = newCycleTime;
                }

                factories.Add(newFactory);
            }

            var productsJSON = JsonConvert.SerializeObject(products.ToArray());
            File.WriteAllText(outputFolder + "products.json", productsJSON);

            var factoriesJSON = JsonConvert.SerializeObject(factories.ToArray());
            File.WriteAllText(outputFolder + "factories.json", factoriesJSON);

            var populationJSON = JsonConvert.SerializeObject(populationLevels.ToArray());
            File.WriteAllText(outputFolder + "populations.json", populationJSON);
        }
    }

    public class Product {
        public int ID { get; set; }
        public string Name { get; set; }
    }

    public class Factory {
        public int ID { get; set; }
        public string Name { get; set; }
        public int CycleTime { get; set; }
        public FactoryIngredient[] Inputs { get; set; }
        public FactoryIngredient[] Outputs { get; set; }
        public bool IsOldWorld { get; set; }
        public bool IsNewWorld { get; set; }
    }

    public class FactoryIngredient {
        public int ProductID { get; set; }
        public int Amount { get; set; }
    }

    public class PopulationLevel {
        public string Name { get; set; }
        public PopulationInput[] Inputs { get; set; }
    }

    public class PopulationInput {
        public int ProductID { get; set; }
        public decimal Amount { get; set; }
        public int SupplyWeight { get; set; }
        public int MoneyValue { get; set; }
    }
}