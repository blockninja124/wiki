"use strict";(self.webpackChunkfigurawiki=self.webpackChunkfigurawiki||[]).push([[2438],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var r=a.createContext({}),s=function(e){var t=a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(r.Provider,{value:t},e.children)},g="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),g=s(n),p=i,d=g["".concat(r,".").concat(p)]||g[p]||h[p]||o;return n?a.createElement(d,l(l({ref:t},u),{},{components:n})):a.createElement(d,l({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=p;var c={};for(var r in t)hasOwnProperty.call(t,r)&&(c[r]=t[r]);c.originalType=e,c[g]="string"==typeof e?e:i,l[1]=c;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},759:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var a=n(7462),i=(n(7294),n(3905));const o={},l=void 0,c={unversionedId:"tutorials/ActionWheel",id:"tutorials/ActionWheel",title:"ActionWheel",description:"The Action Wheel is a gui element provided by Figura that allows for adding highly customizable Actions that can provide additional functionality to your avatar.",source:"@site/docs/tutorials/ActionWheel.md",sourceDirName:"tutorials",slug:"/tutorials/ActionWheel",permalink:"/tutorials/ActionWheel",draft:!1,editUrl:"https://github.com/figuramc/wiki/tree/main/docs/tutorials/ActionWheel.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Tutorials",permalink:"/category/tutorials"},next:{title:"Animations",permalink:"/tutorials/Animations"}},r={},s=[{value:"Example Action Wheel",id:"example-action-wheel",level:2},{value:"Further Reading",id:"further-reading",level:3},{value:"Advanced Action Wheel",id:"advanced-action-wheel",level:2},{value:"Multi Page Setup",id:"multi-page-setup",level:3},{value:"Setting Default State of Toggle Action",id:"setting-default-state-of-toggle-action",level:3}],u={toc:s},g="wrapper";function h(e){let{components:t,...n}=e;return(0,i.kt)(g,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Action Wheel is a gui element provided by Figura that allows for adding highly customizable Actions that can provide additional functionality to your avatar."),(0,i.kt)("p",null,"The Action Wheel operates on Pages. Only a single Page can be active at a time.",(0,i.kt)("br",null),"\nPages contain Actions. A Page can have an unlimited amount of Actions, but the Action Wheel can only render 8 at a time. While a Page with more than 8 Actions is active, you can use the scroll wheel to move between the groups of 8 Actions within the Page."),(0,i.kt)("h2",{id:"example-action-wheel"},"Example Action Wheel"),(0,i.kt)("p",null,"First step is to create the Page that will hold the Actions. This is done via the ",(0,i.kt)("code",null,"newPage")," function."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"local mainPage = action_wheel:newPage()\n")),(0,i.kt)("p",null,"This creates a new page, but thats it. If you save and try to open the Action Wheel (Default Keybind B), you will see a message stating that there is no active page. We can use the ",(0,i.kt)("code",null,"setPage")," function while providing a reference to a Page object to set the active page."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"action_wheel:setPage(mainPage)\n")),(0,i.kt)("p",null,"Tada. New blank page and Figura isnt screaming at us. Now for some actions.",(0,i.kt)("br",null),"\nYou can call the ",(0,i.kt)("code",null,"newAction")," function on a Page object. This will create a new Action ",(0,i.kt)("em",{parentName:"p"},"and")," add it to the Page."),(0,i.kt)("p",null,"You technically do not need to store the Action in a variable. If you do, please give it a unique variable name. Using the same variable name for all actions can cause issues when doing more advanced stuff."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"local action = mainPage:newAction()\n")),(0,i.kt)("p",null,"New Action, but it really doesn't look like much. Lets add a title, a display item, and perhaps change the color that appears when the Action is hovered over."),(0,i.kt)("p",null,"One thing to remember is that all Action functions return itself. This allows for functions to be chained together, always modifying the same action"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'local action = mainPage:newAction()\n    :title("My Action")\n    :item("minecraft:stick")\n    :hoverColor(1, 0, 1)\n')),(0,i.kt)("p",null,"Pretty, but functionally useless. Lets add a function to the ",(0,i.kt)("code",null,"leftClick")," field. When the Action is left clicked, the function stored in the Action's ",(0,i.kt)("code",null,"leftClick")," field gets invoked."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'local action = mainPage:newAction()\n    :title("My Action")\n    :item("minecraft:stick")\n    :hoverColor(1, 0, 1)\n    -- the <code>onLeftClick</code> function just sets the Action\'s <code>leftClick</code> field\n    :onLeftClick(function()\n        print("Hello World!")\n    end)\n')),(0,i.kt)("p",null,"Now we have an Action that does stuff. You may not notice anything, but there is a glaring issue with the current code."),(0,i.kt)("p",null,"The issue is that the leftClick code will only execute on your computer."),(0,i.kt)("p",null,"As described in ",(0,i.kt)("a",{parentName:"p",href:"./Pings"},"Pings"),", Figura is completely clientside. The Action Wheel is a feature added by Figura, meaning it will never be synced between clients via the Minecraft Server. So instead, we must use Pings that utilize Figura's Backend to sync data between clients."),(0,i.kt)("p",null,"First step is to take the code that would be executed on leftClick, and turn it into a ping function. Then, instead of assigning an anonymous function to ",(0,i.kt)("code",null,"leftClick"),", we assign the ping function itself to ",(0,i.kt)("code",null,"leftClick")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"IMPORTANT: ALL PING FUNCTIONS MUST HAVE UNIQUE NAMES")),(0,i.kt)("br",null),"\nAlso, please name your ping function so that it describes what it does. I ",(0,i.kt)("em",{parentName:"p"},"hate")," seeing ",(0,i.kt)("code",null,"pings.actionClicked")," in the hellp channel in discord. Do something like ",(0,i.kt)("code",null,"pings.playEmote1")," or ",(0,i.kt)("code",null,"pings.setArmorVisibility"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'-- Create ping function that does the same thing the Action would have done.\n-- It must be defined above the Action.\nfunction pings.actionClicked()\n    print("Hello World!")\nend\n\nlocal action = mainPage:newAction()\n    :title("My Action")\n    :item("minecraft:stick")\n    :hoverColor(1, 0, 1)\n    -- Pass in the ping function itself into <code>onLeftClick</code>\n    :onLeftClick(pings.actionClicked)\n')),(0,i.kt)("p",null,"And there you have it. An Action that correctly executes it's contents across all clients."),(0,i.kt)("p",null,"While this will correctly sync the timing of the execution of the ping function with all clients, it needs a slight modification if you want to send arguments with the ping."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'function pings.actionClicked(a)\n  print("Hello World!", a)\nend\n\nlocal action = mainPage:newAction()\n    :title("My Action")\n    :item("minecraft:stick")\n    :hoverColor(1, 0, 1)\n    :onLeftClick(function()\n        pings.actionClicked(math.random())\n    end)\n')),(0,i.kt)("p",null,"What we are doing is wrapping the call to the ping function inside another function."),(0,i.kt)("p",null,"The code below is a common mistake beginners can fall into.",(0,i.kt)("br",null),'\nWhile the code might seem correct to those less code literate, it translates to "call the ping function, then assign the return result to the ',(0,i.kt)("code",null,"leftClick"),' field".',(0,i.kt)("br",null),"\nA ping will never have a return value, meaning ",(0,i.kt)("code",null,"leftClick")," is being assigned the value ",(0,i.kt)("code",null,"nil"),", meaning nothing."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"mainPage:newAction()\n    :onLeftClick(pings.actionClicked2(math.random()))\n    -- Do not do use this code. It will not work.\n")),(0,i.kt)("p",null,"Here is the full copy paste for an example Action Wheel"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'local mainPage = action_wheel:newPage()\naction_wheel:setPage(mainPage)\n\nfunction pings.actionClicked()\n    print("Hello World!")\nend\n\nlocal action = mainPage:newAction()\n    :title("My Action")\n    :item("minecraft:stick")\n    :hoverColor(1, 0, 1)\n    :onLeftClick(pings.actionClicked)\n')),(0,i.kt)("h3",{id:"further-reading"},"Further Reading"),(0,i.kt)("p",null,"Go ",(0,i.kt)("a",{parentName:"p",href:"/globals/Action-Wheel/Action"},"here")," for more information on Actions, like making your action ",(0,i.kt)("a",{parentName:"p",href:"/globals/Action-Wheel/Action#setOnToggle"},"toggleable"),"."),(0,i.kt)("h2",{id:"advanced-action-wheel"},"Advanced Action Wheel"),(0,i.kt)("h3",{id:"multi-page-setup"},"Multi Page Setup"),(0,i.kt)("p",null,"Creating a network of Pages can be overwhelming. Lets try to rectify that."),(0,i.kt)("p",null,"This method for creating a Page Network divides the Pages into seperate, isolated files. These files return an Action that can be added to a different page. This Action will set the cuurrent page to the page in the file, but it first stores a reference to the Page it came from. That way when you want to go back to the previous page, its as simple as setting the current page to the stored Page."),(0,i.kt)("p",null,"This allows Pages to be modular and easily reorganized if needed. More importantly, it can help make multiple pages less overwhelming."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'--ActionWheel.lua\n-- This file controls the root Page. All Pages are \'children\' of this Page.\nlocal mainpage = action_wheel:newPage()\n-- <code>setAction</code> is used to add an Action that already exists to this Page\n-- You need to specify the slot the Action wil go into, but <code>-1</code> can be used to put it in the next available slot.\nmainpage:setAction(-1, require("Page1"))\nmainpage:setAction(-1, require("Page2"))\naction_wheel:setPage(mainpage)\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'--Page1.lua\n-- Create the Page\nlocal page = action_wheel:newPage()\n-- Define the Actions within the Page (These are dummy example Actions)\npage:newAction():title():color():onLeftClick()\npage:newAction():title():color():onLeftClick()\npage:newAction():title():color():onLeftClick()\n\n-- This variable stores the Page to go back to when done with this Page\nlocal prevPage\n-- This Action just sets the stored page as active\npage:newAction()\n    :title("GoBack")\n    :item("minecraft:barrier")\n    :onLeftClick(function()\n        action_wheel:setPage(prevPage)\n    end)\n\n-- <code>Page:newAction</code> automatically adds the Action to the Page.\n-- This is unwanted, so <code>action_wheel:newAction()</code> is used so just make an Action.\n-- This is the Action that will be returned by <code>require</code> and will be used to navigate to this file\'s Page\nreturn action_wheel:newAction()\n    :title("Page1")\n    :onLeftClick(function()\n        -- store the current active page so that we can set it back as active later\n        prevPage = action_wheel:getCurrentPage()\n        -- set this file\'s page as active\n        action_wheel:setPage(page)\n    end)\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'--Page2.lua\n-- Page2 is just to show that the entire process can be repeated verbatum, so long as the variables are <code>local</code>.\nlocal page = action_wheel:newPage()\npage:newAction():title():color():onLeftClick()\npage:newAction():title():color():onLeftClick()\npage:newAction():title():color():onLeftClick()\n\nlocal prevPage\npage:newAction()\n    :title("GoBack")\n    :item("minecraft:barrier")\n    :onLeftClick(function()\n        action_wheel:setPage(prevPage)\n    end)\n\nreturn action_wheel:newAction()\n    :title("Page2")\n    :onLeftClick(function()\n        prevPage = action_wheel:getCurrentPage()\n        action_wheel:setPage(page)\n    end)\n')),(0,i.kt)("h3",{id:"setting-default-state-of-toggle-action"},"Setting Default State of Toggle Action"),(0,i.kt)("p",null,"This primarily utilizes calling a ping function without the network code, which is explained ",(0,i.kt)("a",{parentName:"p",href:"./Pings#ping-on-init"},"here")),(0,i.kt)("p",null,"This example will correctly set the default visibility of a theoretical jetpack model"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'-- This variable\'s initial value will control the default state of the togglable thing.\nlocal jetpackEnabled = true\nlocal jetpackModel = models.model.Body.Jetpack -- reference a ModelPart for convinience\nlocal function setJetpack(bool)\n    jetpackEnabled = bool -- this will be a ping function, so we still need to set the client\'s variable for when it is used in the toggle.\n    jetpackModel:setVisible(bool)\nend\npings.setJetpack = setJetpack -- we now have a normal function and a ping function that calls the normal function after network stuff\n-- This event controls the particle effect of the jetpack\nfunction events.tick()\n    -- once every 4 ticks while the jetpack is visible\n    if jetpackEnabled and world.getTime() % 4 == 0 then\n        -- spawn particles relative to the model itself in the world\n        local partMatrix = jetpackModel:partToWorldMatrix()\n        particles:newParticle("minecraft:flame", partMatrix:apply(3, -6, 0))\n        particles:newParticle("minecraft:flame", partMatrix:apply(-3, -6, 0))\n    end\nend\n\n-- Page boilerplate\nlocal mainpage = action_wheel:newAction()\naction_wheel:setPage(mainpage)\n\n-- calling a ping in the script initialization is a bad idea, hence why the reference to the normal function is needed\nsetJetpack(jetpackEnabled)\nmainpage:newAction()\n    :title("Enable Jetpack")\n    :toggleTitle("Disable Jetpack")\n    :onToggle(pings.setJetpack) -- use the ping for the action toggle, as that is still needs to be pinged\n    :toggled(jetpackEnabled) -- the <code>toggled</code> function sets the internal <code>state</code> of the Toggle Action. It *does not* call <code>toggle</code> or <code>untoggle</code>.\n')))}h.isMDXComponent=!0}}]);