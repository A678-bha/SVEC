 ### front-end technologies
- HTML
- Javascript
- bootstrap
- angular
- reactjs


### backend technologies
- node.js
	- node.js
	- nodemoon
	- cors
	- dotenv
- php
- c#
- java
- python


### databases
- mongodb
- Mysql
- Sqlite
- firebase
- postgrassql
- oracle
+vcs   or (source code management)
	  - distributed vcs
                    - git,mercurial
          - remote(central)vcs
                    - github,bitbucket
### git 

- git init
- git add filename
- git add filename1 filename5 filename100
- git add . or git add --all
- git status
- do git configurations(set user.name and usetr.email)
- commit data with commit message
- push the code into the github


### HTML5

- hyper text markup language
- there are three categories 
    - semantic elements
	     - there will be no reflection
		    - header
			- section
			- article
			- aside
			- footer
			- table
- block level elements(it will occupy enetier wudth of the browser)
	- h1 to h6
	- paragraph
    - div
	- header
	- all semantic elements are block level elements 
	- text will start from new line 
- inline elements
	- span
	- img
	- a
	- nav
	- form
	- input
	- testarea
	- legend
	- sub
	- sup

### reference links
- [flaticon](https://www.flaticon.com/)
- [colorcodes](https://webaim.org/resources/contrastchecker/)
- [svgicon]
- [jsonlink](https://jsonlint.com/)()
- [jsonlink](https://jsonlint.com/)()
Task :
======
- audio
- video
- canvas 
- progress
- meter
- datalist
- select elements
### css

+ cascading style sheets
+ Types of css
  - inline css
  - internal css 
  - extrenal css
+ syntax of class
  ```
 selector {
	 css properties
 }  


### selectors
    
  + simple selectors
     - by element name
	 - grouping selectors(,)
	 - class selector
	 - id selector

+ Combinators
  + descendant selector( )
  + child selector(>)
  + Adjacent sibling selector(+)
  + general sibling selector (~)
+ pseudo class selector
+ pseudo element selector
+ Attribute selector  
### box model
  + margin
  + border
  + padding
	- padding:10px(for all adjacent sides)
	- padding:10px 30px(10px for top and botttom;30px for left abd right)
	- padding:10px 300px 50px(10px for top;300px for left and right; 50px for bottom)
	- padding:10px 30px 4px 50px(top,right,bottom,left)
  + width
  1rem:16px
+ display
     - none
	 - inline
	 - block
	 - inline-block
+ position
    - static
	- relative
	- absolute
	- fixed
	- sticky
+ align-content
+ align-items
+ align-self

### Animations
### Responsive web design
### Flex-box
   
- Dispaly
    - flex
	   - flex-wrap
	   - justify-content
	   - flex-direction
	   - flex-flow
### media quries

 - extra small devices(mobiles)
       - max-width:600px
 - small devices(large phones)
       - min_width:600px
	   -   768
 - medium devices(small laptops)
       - min-width:768px
 - large devices(large laptos and desktops)
	- min-width:992px
 - extra large devices()
	- min-width:1200px



 ```

 @media only screen(min-width:320px) and (max-width:500px){
	 css code
 }
 ```
 ### Bootstrap4.6

- it is a css framework

Task3:
======

     - navbar with responsive

- module(collections of functions and classes )
- package(collection of modules)
- library(collection of packages)
- framework(collection of library)
+ module --> package  --> Library --> Framework


+ types of modes
   - offline
   - online
      - CDN links

+ background-color - bg
+ text-white

+ margin in bootstarp(m-*(0-5))
     - 0 -->0rem
	 - 1 -->0.25rem (4px)
	 - 2 -->0.5rem(8px)
	 - 3 -->1rem(16px)
	 - 4 -->1.5rem(24px)
	 - 5 -->3rem(48px)
	 - ml-8(margin-left)
	 - m(margin in all directions)
	 - mt(margin-top)
	 - ml-5(margin-left)
	 - mb(margin-bottom)
	 - mr(margin-right)
+ padding(padding-left --> pl-5)	 
+ ml-
+ m
+ mt


+ colors
  - primary
  - secondary
  - info
  - sucess
  - warning
  - danger
  - light
  - dark
  - white


+ we can use color classes for
    - buttons(btn btn-primary)
	- text(text-white)
	- background(bg-secondary)
	- alerts(alert alert-primary)
+ Grid system
	-  col-sm-12
    - sm(small devices)
	- md(medium devices)
	- lg(large devices)
	- xl(extra large devices)
+ modals
+ table


### javaScript


+ In 1995 `brenden eich` introduced javascript(ES-262)
+ it is a text-based programming language 
and we can se in clinet-side and server side
 (Node.js) for dynamic web appplication
+ JavaScript loosely toupled and dynamic language
- ECMA-script(ES-6)
	- Let & const
	- map()
	- arrow function
	- classes

+ Datatypes
	- Number
	- BigInt(2^53-1)
	- String
	- Boolean
	- undefine
	- Null
	- object
	- Array

+ variables 
  - var , let & const
  - scope
	- function level -->var
	- block level --> let & const
  - Redefine  --> var,let
  - Redclare --> 	

+ `typeof()`
+ object

```
{
	name:"kalyan"
}
```

+ array

### Alert

+ to generate notifications
	- alert
	- prompt(to take input from the user)
	- confirm

+ console statements
	- `console.log()`
	- `console.info()`
	- `console.error()`
	- `console.warn()`

+ Spread Operator
	- To change array elements from one array to another(swap)

```
     ...variableName

```
+ rest parameter
	+ to handle function parameters

	```
	 	...Parameter
	```	 
+ Destructuring of Array & object

+ Functions

	- function with function name
	```
	function demo(x,y){
		return x+y
	}
      demo()
	  ```
	  - Anonymous function
	  ```
	  let demo=function(x,y){
		  return x+y
	  }
	  ```
	  - arrow function
	  ```
	  let demo=(x,y)=>{
		  return x*y
	  } 
	  demo(3,4)
	  ```

+ for-in
	- to get index values of an array
+ for-of
	- to get elements in an array
+ forEach() --> (ES-5)
+ Map -->(ES-6)

### DOM
 - Document object model
 - document
 - history
 - window
 - navigatior
+ DOM methods
- `getElementById()`
- `getElementsByClassName()`
- `querySelector`
- `innerText`
- `textContent`
- `append`
- `appendChlid`
- `innerHTML`
- `setAttribute`
- `classList`
- `style`
- `src`


### JSON 
+ javaScript object Notation
   - To exchange information between application and server
```
{
	"name":"ram",
	"salary":"6.5LPA",
	"designation":"MERN developer",
	"mobile":3453532656
} 	
```

+ Ajax call or promises(fetch API) or axios 


### Reactjs


##### ReactJS Features

+ It is a Library
+ It follows component based Architecture
	- Functional Component
	- Class Component
	- Pure Component
	- Higher Order Component
+ It provides Virtual DOM
+ It provides JSX(JavaScript and XML)
+ Unidirectional data flow 
+ Single Page Applications

+ Props

	- To pass data from one component to another component we will use props 
	- Props are immutabe


	+ UnionBank(Functional)
	   - AndhraBank(Functional)
	   - corporationBank(Class)

	+ States 

	- In react to maintain information we will use states
	- We can maintain states in class component only(Before react16.8 version)
	- To take states in react ,Try to create constructor above 
	  render method and inside of class component
	- use `rconst` snippet
	```
	constructor(){
		super();
		this.states={

		}
	}   
	``` 
	- To update the state information in class component use
	`setSate()` method

	+ To update the information inclass component we have to follow component life cycle methods
	 `setState()` method
	 + To update the information inclass component we 
	 have to follow component life cycle methods
     - `componentWillMount()`
	 + `componentDidMount()`
	 - `componentShouldUpdate()`
	 + `componentWillUpdate()`
	 - `componentDidUpdate()`
	 + `componentwillUnMount()`



	### Hooks

	+ from react 16.8 Hooks are introduced 
	- Parent - child1 --> child2 -->child3
	- `useState()`
	- `useEffect()`
	- `useMemo()`
	- `useRef()`
	- `use
+ Project Enviornment setup

	-[Downloadnidejs](https://nodejs.org/en/download/)
	- [DownloadVisualStudioCode](https://code.visualstudio.com/)
   - install nodejs and check versions of `node` and `nmp`
   - `node -v`
   - `node -v`
 - `webpack` and `babel` 
 - `create-react-app`
	- `npm install create-react-app`
		- `create-react-app projectname`
 - `npx create-react-app-appname`

 + Index.html
 + Index.js
 + App.js

   + IndexPage

	 - nav.js
	 - body.js
	 - footer.js

+ Home.js
	- nav
	- body
	- footer
+ Login.js
+ Register
+ About
+ Contact
   

