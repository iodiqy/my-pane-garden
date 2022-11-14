#web-design #react #inprogress 

>[!tip] Continue [Using JSON Server](https://youtu.be/eao7ABGFUXs)

# What is React?

*Allows easily create Single Page Apps - SPA's for short.*

>[!tip] Node should be installed on your PC

##### For a start:
- This creates an app packed with Babble and Webpack, needed to compile our app into jsx.
```terminal
npx create-react-app "name of your project"
```

##### For deploying app use:
```
npm start
```

# Structure of React app folder

### Node-modules folder
- Dependencies of the app
- The React itself is in this folder

### Package-lock.json
- Used to prevent differences in installed dependencies.

### Package.json
- `package.json` is file where we store the names of dependencies that we are using in project
	- Developers of React templates in github usually do not include `node_modules` folder, because it has a large size.
	- At the same time it can be easily downloaded with  `npm install` or `` command and this script downloads dependencies according to the data in `package.json` file.

# React Components
- Component is just a function which return a JSX template and that function is exported at the bottom of the file (e.g. `export default App;`)
- Self contained section of content (e.g. NavBar, SideBar, Footer - can be components)
- Component contain
	- Template (html)
	- Logic (javascript)
- This `App` component is not HTML, this is smth called **JSX**
```jsx
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
```


# Dynamic values in Templates
- `{ title }` this is a dynamic value
```jsx
function App() {
  const title = 'Welcome to the new blog';
  const likes = 50; //react converts it to string
  /* 
  the only things it can't convert is boolean and object. For example:
  const person = { name: 'yoshi', age: 30 };
  */
  const link = "http://www.google.com";

  return (
    <div className="App">
      <div className="content">
        <h1>{ title }</h1>
        <p>Liked { likes } times</p>

        <p>{ 10 }</p>
        <p>{ "Hello, ninjas" }</p>
        <p>{ [1,2,3,4,5] }</p>
        <p>{ Math.random() * 10 }</p>

        <a href={ link }>Google Site</a>
      </div>
    </div>
  );
}
```

# Multiple Components
- `Navbar` and `Home` components are nested into `App` component
```jsx
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}
```
- Creating components which is nested into `App` component
	- There can be used arrow structure of component ↓
		- Stateless Functional component (snippet: `sfc`)

# Adding styles
- There can be separate style for each component
- First curly brackets means we are using dynamic value
	- Second curly bracket inside it, is a javascript styling object
```jsx
<a href="/create" style={{
	color: "white",
	backgroundColor: '#f1356d',
	borderRadius: '8px'
}}>New Blog</a>
```

# Click Events
##### Simple button click event
```jsx
const Home = () => {

    const handleClick = () => {
        console.log('hello,ninjas');
    }

    const handleClickAgain = (name) => {
        console.log('Hello ' + name)
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click me</button>
            {/*
            This gonna be invoked without a click:
            <button onClick={handleClick()}></button>
            ---
            So, for not invoking it instantly, we wrap that function in inline arrow function.
            As it shown below:
            */}
            <button onClick={() => handleClickAgain('mario')}>Click me again</button>
        </div>
     );
}
 
export default Home;
```

##### Sending `e` object in the function
```jsx
const handleClick = (e) => {
	console.log('hello,ninjas', e);
}
```

##### Send an `e` object's target property
```jsx
    const handleClickAgain = (name, e) => {
        console.log('Hello ' + name, e.target)
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={(e) => handleClickAgain('mario', e)}>Click me again</button>
        </div>
     );
```
Output:
```Console
Hello mario
<button>Click me again</button>
```

# Using state (useState hook)
- React *doesn't watch for the changes in values*. So, we need to trigger it to re-render the template with new value. To accomplish this we need to use thing as - **hook**.
```jsx
import { useState } from "react";

const Home = () => {
    // let name = 'mario'; this is not a reactive variable
    
    //name is variable, setName is function
    //We can use setName function to change 'mario'
    const [name, setName] = useState('mario');

    //When we use setName function ->
    //it trigger React to re-render
    const handleClick = () => {
        setName('luigi');
    }

    return ( 
        <div className="home">
            <p>{name}</p>
            <button onClick={handleClick}>Click me</button>
        </div>
     );
}
```
- The **value** (instead of 'mario' in code above) can be an array, boolean, object, number, no matter what type.

# React Developer Tools (Extension)
*This is a extension for browser, which gives extra features*
- We can get *component diagram* (tree) of our app
- We can watch the *hooks* of React app realtime
- See the matching DOM element
- View the source of element (.js file)

# Outputting Lists (Blogs)
- In our blog we gonna have more and more articles by the time and our code should be capable of rendering them all. 
- To accomplish that **map method** in Javascript is used.
	- It cycles through an array and do smth with each item in the array.
```jsx
import { useState } from "react";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'Article One', body: 'lorem', author: 'mario', id: 1 },
        { title: 'Article Two', body: 'lorem', author: 'yoshi', id: 2 },
        { title: 'Article Three', body: 'lorem', author: 'mario', id: 3 }
    ]);

    return ( 
        <div className="home">
            {blogs.map((article) => (
                <div className="blog-preview" key={article.id}>
                    <h2>{article.title}</h2>
                    <p>Written by {article.author}</p>
                </div>
            ))}
        </div>
     );
}
```
- `key` property is used by React to *keep track* of each item in the DOM
	- so, this is actually an `id` property of each item in the array

# Props - Blog List component
- If we gonna display our articles list on several pages, we don't want to repeat our code on each page. So, better to create reusable component → in the form of **props**.
- **Props** is used to pass through the data into component

###### Home.js
```jsx
import BlogList from "./BlogList";

...

<div className="home">
	{/* This one here is a prop 'blogs={blogs} and 'title' */}
	<BlogList blogs={blogs} title='All Blogs!' />
</div>
```

###### BlogList.js component
```jsx
const BlogList = (props) => {
const blogs = props.blogs;
const title = props.title;

    return (
        <div className="blog-list">
            <h2>{ title }</h2>
            {blogs.map((article) => (
                <div className="blog-preview" key={article.id}>
                    <h2>{article.title}</h2>
                    <p>Written by {article.author}</p>
                </div>
            ))}
        </div> 
    );
}
 
export default BlogList;
```

###### There is a way to shorten this code
```jsx
const BlogList = (props) => {
const blogs = props.blogs;
const title = props.title;
```
###### To this, it does the same
```jsx
const BlogList = ({ blogs, title }) => {
```

# Reusing Components
###### Home.js - Filtering out by the author name
```jsx
        <div className="home">
            {/* This one here is a prop 'blogs={blogs}' */}
            <BlogList blogs={blogs} title='All Blogs!' />
            <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's blog" />
        </div>
```

# Functions as Props
*We gonna create a button which allow to delete the article*
###### Home.js - passing of `handleDelete` function into prop
```jsx
const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'Article One', body: 'lorem', author: 'mario', id: 1 },
        { title: 'Article Two', body: 'lorem', author: 'yoshi', id: 2 },
        { title: 'Article Three', body: 'lorem', author: 'mario', id: 3 }
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(article => article.id !== id);
        setBlogs(newBlogs);
    }

    return ( 
        <div className="home">
            {/* This one here is a prop 'blogs={blogs}' */}
            <BlogList blogs={blogs} title='All Blogs!' handleDelete={handleDelete}/>
            <BlogList blogs={blogs.filter((article) => article.author === 'mario')} title="Mario's blog" handleDelete={handleDelete}/>
        </div>
    );
}
```
###### BlogList.js - sending article id to the `handleDelete` function
```jsx
const BlogList = ({ blogs, title,handleDelete }) => {
    return (
        <div className="blog-list">
            <h2>{ title }</h2>
            {blogs.map((article) => (
                <div className="blog-preview" key={article.id}>
                    <h2>{article.title}</h2>
                    <p>Written by {article.author}</p>
                    <button onClick={() => handleDelete(article.id)}>delete blog</button>
                </div>
            ))}
        </div> 
    );
}
```

# useEffect Hook 
- *This hook runs a function in every render of a component.*
	- Component render initially as website loads
	- But it also renders when the state changes (useState hook)
- Every time there is state change (e.g. deleting the article of a blog), it will run a function. So here we will see 'use effect run' message on the console.
```jsx
    useEffect(() => {
        console.log('use effect run');
    });
```

## Dependencies
- *There is no need to run a function after every single render, maybe only a certain renders.* To do that we can use something called a **dependency array**.
- This is an array that we can pass into useEffect hook as a second argument:
```jsx
    useEffect(() => {
        console.log('use effect run');
    },[]);
```
>This empty dependency array makes sure that the useEffect hook only runs a function initially. It only runs it once on first render.
###### We can make hook watch out for a change of `name`
```jsx
    useEffect(() => {
        console.log('use effect run');
        console.log(name);
    },[name]);
```
>Name is a dependency and when it changes, we run a function.

# Using JSON Server
*There is another page about [[Running a JSON Server]].*















---

# References
1. [Full Modern React Tutorial - The Net Ninja video playlist](https://www.youtube.com/watch?v=j942wKiXFu8&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d)
	1. Course files in [Github](https://github.com/iamshaunjp/Complete-React-Tutorial)

