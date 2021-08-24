Browser("daves2ng/UFT-340: Learning").Page("daves2ng/UFT-340: Learning").Sync
Browser("daves2ng/UFT-340: Learning").OpenNewTab @@ hightlight id_;_853192_;_script infofile_;_ZIP::ssf1.xml_;_
Browser("Browser").Navigate "http://devops.techdavez.com/" @@ hightlight id_;_853192_;_script infofile_;_ZIP::ssf3.xml_;_
Browser("Browser").Page("Techdavez DevOps Training").WebEdit("wpforms[fields][1][first]").Set "Test" @@ script infofile_;_ZIP::ssf4.xml_;_
Browser("Browser").Page("Techdavez DevOps Training").WebEdit("wpforms[fields][1][last]").Set "User" @@ script infofile_;_ZIP::ssf5.xml_;_
Browser("Browser").Page("Techdavez DevOps Training").WebEdit("wpforms[fields][2]").Set "uft@techdavez.com" @@ script infofile_;_ZIP::ssf6.xml_;_
Browser("Browser").Page("Techdavez DevOps Training").WebEdit("wpf-temp-wpforms[fields][12]").Set "8015654789" @@ script infofile_;_ZIP::ssf7.xml_;_
Browser("Browser").Page("Techdavez DevOps Training").WebRadioGroup("wpforms[fields][3]").Select "Single Installment - $1000" @@ script infofile_;_ZIP::ssf8.xml_;_
Browser("Browser").Page("Techdavez DevOps Training").WebRadioGroup("wpforms[fields][11]").Select "CashApp - $devopstraining" @@ script infofile_;_ZIP::ssf9.xml_;_
Browser("Browser").Page("Techdavez DevOps Training").WebElement("Click or drag a file to").Click
'new window for uploading content is added from here
Window("Google Chrome").Dialog("Open").WinObject("Items View").WinList("Items View").Activate "Desktop" @@ hightlight id_;_1925562112_;_script infofile_;_ZIP::ssf10.xml_;_
Window("Google Chrome").Dialog("Open").WinObject("Items View").WinList("Items View").Select "uft" @@ hightlight id_;_1925577512_;_script infofile_;_ZIP::ssf11.xml_;_
Window("Google Chrome").Dialog("Open").WinButton("Open").Click @@ hightlight id_;_329168_;_script infofile_;_ZIP::ssf12.xml_;_
'close of windows object after selecting files
Browser("Browser").Page("Techdavez DevOps Training").WebFile("WebFile").Set "uft.png" @@ script infofile_;_ZIP::ssf13.xml_;_
Browser("Browser").Page("Techdavez DevOps Training").WebCheckBox("wpforms[fields][6][]").Set "ON" @@ script infofile_;_ZIP::ssf14.xml_;_
Browser("Browser").Page("Techdavez DevOps Training").WebEdit("wpforms[fields][7]").Set "thanks you for this test" @@ script infofile_;_ZIP::ssf15.xml_;_
Browser("Browser").Page("Techdavez DevOps Training").WebButton("Submit").Click @@ script infofile_;_ZIP::ssf16.xml_;_
