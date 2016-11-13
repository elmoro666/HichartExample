# HichartExample


Repo created to investigate how to properly use react-highcharts unbundled, ie without the bundled version of Highcharts.

clone, npm install.

react-highcharts is version 11.0.0 which is bundled with highcharts 5.0.2
highcharts version 4.2.7 is installed.

trying to use react-highcharts unbundled results in both 4.2.7 version and 5.0.2 version being required.

In index.bundle.js, search for 4.2.7 anf 5.0.2 and you will find both. Run "npm run reason"  to see that both packages are bundled.

