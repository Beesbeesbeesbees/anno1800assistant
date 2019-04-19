# [Launch Anno 1800 Assistant In-Browser](https://beesbeesbeesbees.github.io/anno1800assistant/)

# anno1800assistant
Anno 1800 Assistant is a tool to compute consumption and production rates of consumer goods in Anno 1800. It is designed to aid with tracking population and building counts in moment-to-moment gameplay. At a glance the user should be able to see what effect building or promoting residences will have in their goods consumption and when new production chains will be required. It also allows modeling of multiple islands at once and trade interactions between them.

## Info
The rates in calculations in the app are based on independent research into the games' files and experiments in the retail version of the game. Like in previous anno games, the consumption model appears to be based on number of residences per population level per second, rather than being based on population as one might expect.

## Instructions
Input the number of residences per population level of an island into the top row. Promotion buttons are added for convenience when promoting from one level to the next. Use shift or control modifier keys to promote multiple residences at a time.

The bottom section contains all relevant production buildings for the island, with the number of factories required to fully satisfy the population listed in the 'Required' column. Once a production chain is marked as 'Enabled', you will be able to input the number of production buildings constructed on the island, and the row will be color coded to show whether the current production is enough to satisfy the demand. Once enabled, the production chain will also be reflected in the 'Population' row in the top section for population/workforce calculation.

The 'Productivity' column can be used to reflect increases or decreases in productivity due to island bonuses or penalties. Adjusting it should adust the 'Required' column accordingly, and adjusting it for intermediate products in production chains should properly adjust all earlier products.

The 'Trade' column can be used to model trading goods from one island to another. The value will be added or subtracted to the 'Built' column to determine goods satisfaction for the island. Trade is measured in production buildings (so a value of 1 in the 'Trade' column would satisfy the same demand as a value of 1 in the 'Built' column.) The trade input box will show red if the global balance of trade goods for a particular product is inbalanced. The tooltip for the input box will show the global trade balance. Note that trade balance is affected by productivity. For example, an island exporting a single production facility at 200% productivity to an island which also has a single production facility of the same type running at 100% productivity should require Trade values of -1 and +2, respectively to be balanced, to reflect that the total goods available on the second island will be triple the output of a factory running at 100%.

## Building and Debugging
### One-Time Prerequisites
* Node.js (https://nodejs.org/en/)
* Install Angular/CLI locally (per https://angular.io/guide/quickstart#step-1-install-the-angular-cli) with the command:
```
npm install -g @angular/cli
```
* From the anno1800assistant application folder (containing package.json), install required packages with the command:
```
npm install
```
This step may need to be performed again after cloning the repo to new locations or after updating dependencies.

### Debugging locally
From the anno1800assistant application folder (containing package.json):
```
ng serve --open
```

### Building
From the anno1800assistant application folder (containing package.json):
```
ng build --prod
```
Which outputs to the /dist/ folder

## AnnoXMLParser
I also included in the repo a crude tool that I used to parse information out of the game's assets.xml file, which can be extracted using the excllent RDA Explorer tool (https://github.com/lysannschlegel/RDAExplorer)

It is not at all required to run the app, but I've included it for learning purposes, and it may be useful for parsing out new data for future versions of the game or creating translations.

The tool is built in C# .NET and can be run using Visual Studio
