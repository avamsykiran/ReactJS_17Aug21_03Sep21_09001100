REACT JS
===========================================================================
https://github.com/avamsykiran/ReactJS_17Aug21_03Sep21_09001100.git


Pre-Requisite
-------------------------------------
    1. HTML 5
        Standard HTML Eleemnts and Typography
        Form elements and validations
        HTML 5 API
            GeoLocation
            WebStorage
            WebWorkers
    2. CSS
    3. Javascript (ES6)
        DOM manipulataions
        Standard JS objects like String, Math, Date, global
        setInterval,clearInterval,alert,confirm,..etc
        JS Functions - arrow functions, closures, call backs,IIFE
        Spread Operator
        Destructured Assignemnt
        Promsie 
        Rest Operator

Lab Setup
----------------------------------------------------
    1. NodeJS           node --version
                        npm --version
    2. VS Code
    3. Chrome

Web Evolution
-----------------------------------------------------

    Staic Web Site

        a collection of html docuemtns called web-pages.

    Dynamic Web Application

        the page content is dynamically generated.

        Server                                                  client

            Servlets and .jsp  <--------------REQUEST(URL)--------
                            -----(dynamically generated html + css+JS)--->
            .Cs and .aspx

    Single Page Application

        is a UI/UX web appliction that has extactly one and only html page.

        Server                                                  client

            UI/UX bundle        <--------First REQ----------
            (index.html + CSS + JS)
                                -------UI bundle------------->    index.html + CSS + JS

                                                                        the JS on the cleint side
                                                                        is reposible to render and
                                                                        modify the cotnent visible on
                                                                        the screen.

            SOA (Service Oriented Applciation)

                SOAP WEbSerive/
                REST api        <---req for any data neeeded ----                                                    
                                -----------data.json/data.xml----->     the data is received and the js will
                                                                            ensure tha tthe data is presented
                                                                            on the exisitng html DOM.

Node JS
---------------------------------------------------------------------------

    is a javascript execution environment for
    stand alone or serverside execution of javascript.

    react spa is developed not on the broser.
    it is developed on the developer machine.
    for developing a React SPA
        1. have to create a project
        2. have to install all requried libraries including react library
        3. have to transspell JS(ES6) into native JS
        4. the transpelled code msut be bundled and hosted on a development server or production server
        5. have to also run test cases on our react code and the test cases will
         be executed from dev server or production server.

         And for all this we need nodejs.

    Create a react applciation in 2 ways
        1. Manually
            npm init projectNAme
            cd projectName
            npm install eact react-scripts react-dom eslint jest ...etc(all librries)
            create a index.html
            create atlest one react component
            attach the component to the index file
            
        2. Usuing React CLI tool
            npx create-react-app projectName

React JS
---------------------------------------------------------------------------

    is a SPA js library.

    1. Components
    ------------------------------------------------------------------------------------
                    A single page is composed of reusable smart sections called components

                    index.html
                        HeaderComponent
                            BannerComponent
                            NavigationComponent
                        DashBoardComponent
                            SummaryComponent
                            QuickLinksComponent
                            LoginComponent
                            RegistrationComponent

                    Component   =   Behaviral Code + Template  + state + props

                                    Behavoural Code         data laoding/event handling ..etc
                                    Template                a JSX element that can render the state as 
                                                            suggested.
                                    State                   the data that the component is related to
                                    Props                   short for proeprties.
                                                            As each compoent is used as new html element,
                                                            these can have attributes and the attributes are
                                                            accessed through props.

                    Each component can be incldued into the page as ne html elements

                    HeaderComponent         <Header />
                    DashboardComponent      <Dashboard />
                    LoginComponent          <Login />


                    Class Components

                            class Navigation extends React.Component {
                                constructor(props){
                                    this.state={};
                                }

                                render(){
                                    return (
                                        <nav>
                                            <h3>{this.props.title}</h3>
                                            <a href="">...</a>
                                            <a href="">...</a>
                                            <a href="">...</a>
                                        </nav>
                                    );
                                }
                            }

                            class Header extends React.Component {
                                constructor(){
                                    this.state ={
                                        title:"some web ttle",
                                        logo:"path of the logo image"
                                    }; //define all the fields that the state must have
                                }

                                render(){
                                    //return a JSX element only one single element

                                    return (
                                        <header>
                                            <div>
                                                <h1>{this.state.title}</h1>
                                                <img src={this.state.logo}/>
                                            </div>
                                            <Navigation title={this.state.title} />
                                        <header />
                                    );
                                }

                                //method needed to do the behavirual code or event handling code..
                            }

                            index.html
                                <html>
                                    <head></head>
                                    <body>
                                        <Header />
                                    </body>
                                </html>

                    Functional Components

                        is any javascript fucntion that accepts the props and returns a JSX element

                        function MessageBox(props) {
                            return (
                                <div class="alert alert-info">
                                    <p><strong>{this.props.message}</p>
                                </div>
                            );
                        }

                        <MessageBox message="Hello everybody how are you" />

                        const Footer = (props) => (
                            <footer>
                                <!--some footer content goes here -->
                            </footer>
                        );

                        <Footer />

                    High Order Components

                        is a javascript function that accpets a component and 
                        return another component.

                        is used to attach a common functionality to multiple 
                        components. It can accept a component , and attach the
                        new capability to it and then return it.

    2. JSX
    ------------------------------------------------------------------------------------
        JavaScript eXtended Markup Language.

        Assign a markup to a javascirpt variable.

            const myHeaderElement = <h1>A simple heading</h1>.

        Javascript functions can return a markup

            function myFooterMarkup(){
                return (<footer><p>A footer text</p></footer>);
            }

        Interpolation

            <element>{javascriuptExpression}</element>

            <h1>{pageTitle}</h1>

            <h1>Hello, {formatName(user)}!</h1>

            <p>Total Bill Amount is INR.{(rate*qty)+tax} </p>

        Binding Attributes

            const myLogoEle = <img src="../imgs/logo.png" />

            const imgPath = "../imgs/logo.png";
            const myLogoEle = <img src={imgPath} />

        Conditional And Iterative Rendering

            const friendsListElement = (
                <div>
                    {friends.length==0 ?
                        <p>No friends as of now.</p> :
                        <ul>
                            {friends.map(friend => <li>{friend}</li>)}
                        </ul>
                    }
                </div>
            );

    Bootstrap Integration
    ---------------------------------------------------------------------------------

        by including the bootstrap css as CDN link in the index.html file!

        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>

        
    Shadow DOM
    ----------------------------------------------------------------------------------

        DOM is a tree data structure that is created in the browser memory to 
        represent all the elements as nodes in a html docuemnt.

        Each tiem the content of the page has to be modified the node in the DOM tree
        must be removed or added accordingly.

        React observes the state of the component and detects any chagne in the state, if
        the change detected it triggers the render method which inturn triggers
        the DOM manipulation like complete reconstruc tion of the whole component contet.

        But his will be very mcuh costly on the time and performence.

        Each tiem the the render mehtod is triggred the change are not made to the actual DOM
        but the changes are done (the whole recosntruction happens) on a temparary copy
        the DOM calle dShadow DOM which is maintained along side of the actual dom by react.

        One Shadow dom is updated, the update shadow dom is compared with the actual dom, and only
        the differential chagnes will tkae place on actual DOM saving a lot of tiem and computaiton.


    state and setState and props
    ----------------------------------------------------------------------------------

        React.Component

            state
                    is the only source of truth for a component.
                    Any data the component has to hold is held in the 'state'
                    On any change to the state the component is re-rendered by calling the render() method.

                    'state' is not directly mutable. state is not suppoed to me modified directly,
                    as its change has to trigger rendering.

            setState()

                    is a function of the Component class used to mutate (change) the 
                    state of the component.

                    the setState method take the partial state and overrides those proeprties
                    in the 'state'


            props

                    is the set of attributes passed by the parent to the child component.
                    And the props are immutable.

    Form Handling
    ----------------------------------------------------------------------------------

        Controlled Component

            we create objects called refs for each form field
            and attache a ref to the form element. so that the dat
            can be collected when once the form is submitted.

            refs are very costly in terms of memory mangement,

        UnControlled Component

            we will laod the value of each state attribute in one form element.
            and as and when the form element value is changed, the underlying state
            attribute is also modified.

        Assignment: InventoryManagementSystem

                        an array of items as [
                            {id:1,name:'A4 Sheet Bundle',qty:45,rate:156.77,stockType:'SOLD'},
                            {id:2,name:'A4 Sheet Bundle',qty:45,rate:156.77,stockType:'PURCHASED'}
                        ]

                        list of all items
                        with summary like total itmes purchsed
                        and total items sold
                        total purchase value (sum of (rate*qty) of all purchases)
                        total sale value (sum of (rate*qty) of all sales)

                        able to add an item or remove one.

    React Component Life Cycle Methods
    ------------------------------------------------------------------------

            constructor()               //compoennt state initialization
                ↓
            render()                    //do not call setState here..
                ↓
            componentDidMount()         //means that the component loading is complete
                |                       // equivalent to onload evnet
                |                       // used to do the rest api calls.
                |
                \ When ever the state gets updated/chganed \
                            |
                            ↓
                        render()            //do not call setState here..
                            ↓
                    componentDidUpdate()    //anything to be executed
                                            //after the component is rendered,
                                            ////do not call setState here..

                 \ When ever an error occurs at the time component creation or rendering \
                            |
                            ↓
                        componentDidCatch()
                        
                \ Just before the component un loads \
                            |
                            ↓
                        componentWillUnmount()
        
    React Hooks
    -------------------------------------------------

                enable the functional component
                to have lifecycle methods and local
                state.

                1. useState

                            params: initialState
                            return: [stateValue,functionToModifytheState]


                    let [x,setX] = useState(0);
                    let [emp,setEmp] = useState({empId:10,name:'vamsy'});

                2. useEffect

                            params: a function,an array (optional)
                            return: none

                        the function passed is executed
                        after the render. (equivalent to
                        componentDidMount and componentDidUpdate).

                        the optional array is a array of dependencies.
                        this array cna contain one or more local state
                        fields of the component. When ever
                        the local state field supplied in this array
                        gets modified, the function passed will
                        bve executed.

                        if no array is passed, the fucntion executes
                        after every render. 

                        if an empty array is passed the function executes only once
                        after the first render.

    json-server
    -----------------------------------------------------------------------

        is a javascript tool that can generate fake rest endpoints
        from a .json file, only for the sake of practising
        rest api calsls, -NOT FOR REAL TIME PURPOISE.

        npm install json-server --save

        json-server --port portNumber --watch dataFile.json

    Integrating React with REST api Calls - axios
    -----------------------------------------------------------------------

        AXIOS is an independent JS library to do rest api calls.

        npm install axios --save

        axios.get(url) : Promise
        axios.put(url,reqBody) : Promise
        axios.post(url,reqBody) : Promise
        axios.delete(url,reqBody) : Promise
    
    React State Management - Redux
    ------------------------------------------------------------------------

          is a javascript library that provides centralzed,
                application level state mangement.

                    npm install --save redux

                    let mystore = createStore(reducer);

                        store       is a repository of state.
                                    the one that contains all state.
                                    one app ideally has only one store.

                        reducer     is a a function:
                                            params: oldState,action
                                            returns:    modifiedState

                                    an app can have any number of reducers,
                                    but all those reducrs must be combined into
                                    one rootReducer.

                        action      is a object with two propeties:
                                        type            indicate what action tobe done
                                        payload         data needed to do the action.

                                        { type:'ADD_EMP', payload:{eid:1,ename:'Vamsy'}}

                                        { type:'ADD_EMP', emp:{eid:1,ename:'Vamsy'}}

                                        { type:'DEL_EMP', empId:102}
        
    ConnectAPI   -  a library to intergate Redux with React
    -----------------------------------------------------------
                         
            npm install --save react-redux

            Provider        inbuilt component to attach
                            a redux store wiht the App component.

                            <Provider store={myStore}>
                                <App />
                            </Provider>

            connect         is a inbuilt function
                                params: mapStateToProps,mapDisptachToProps
                                return: highOrderComponent
            
            mapStateToProps  is a function that maps requried portion
                                of the state with the props pf a component.
                                        params: wholeStateInStore
                                        return: a json object containing a portion of the
                                                    wholeStateInStore

            dispatch         is a function that carrys an action
                            from a component and gives it t the reducer.

            
            mapDisptachToProps  is a function that maps 'dispatch calls' to
                                    event handlers of the component.
                                    params: disptach
                                    return: a json object containing event ahdnling
                                            functions

            highOrderComponent returned by connect
                    this is going 
                        1. to accept any component
                        2. add json returned by mapStateToProps into props of the component
                        3. add json returned by mapDisptachToProps into props of the component
                        4. return that modified component.


                |-----------mapStateToProps,mapDispathToProps----------------------->   component2
                |                  (suppy the state and dispatch)                             |
                |                                                                             |
            store  -----------mapStateToProps,mapDispathToProps------>   component1           |
                |                 (suppy the state and dispatch)                  |           |
                |                                                                 |           |
                |                                                                 |        dispatch(action)
                |                                                                 |           |
                |                                                         dispatch(action)    |
                |                                                                 |           |
                |<------modified state ---------- reducer <-----(action)-----------           |
                                                    | <--------(action)----------------------

    React Routing
    ------------------------------------------------------------------------

        npm install --save react-router react-router-dom

            react-router-dom

                    <Link to="targetPath"> Link Text </Link>

                    <BrowserRouter>
                        <Component1 />
                        <Component2 />  //will appear as common page layout

                        <Route path="/home" component="C4" />
                        <Route path="/about" component="C5" />
                        <Route path="/contact" component="C6" />

                    </BrowserRouter>

                    <BrowserRouter>
                        <Component1 />
                        <Component2 />  //will appear as common page layout

                        <Switch>
                            <Route path="/" exact component="C3" />
                            <Route path="/home" component="C4" />
                            <Route path="/about" component="C5" />
                            <Route path="/contact" component="C6" />
                        </Switch>
                    </BrowserRouter>
                    
                    <Redirect to="targetUrl" />

    redux-thunk  - Integrate AXIOS to Redux
    ----------------------------------------------------------------------------

    npm install --save redux-thunk
    
    thunk   means a function that returns another function.

    action      can be an object
                can be a function (thunk)

                if the action is an object, it is directed to the reducer
                if the action is a function, that function is executed and it is
                            the resposnibility of that function to send 
                            action objects to the reducer.

        
            store  -----------mapStateToProps,mapDispathToProps--------->   component1         
                |                 (suppy the state and dispatch)                  |          
                |                                                                 |      
                |                                                                 |    
                |                                                                 |          
                |                                                         dispatch(actionObj)    
                |                                                                 |          
                |                                                                 |
                |                                                         --------------------
                |                                          (action object)|                  |(actionFucntion)
                |                                                         |                  |
                |<------modified state ---------- reducer <-----(action)--|                  |
                                                        | <---(action indicating WAIT)-------|
                                                        |                           -----------------------
                                                        |                           | that function       |
                                                        |                           | is executed         |
                                                        |                           | here,the AXIOS call |
                                                        |                           | must happen         |
                                                        |                            -----------------------  
                                                        |                                     |
                                                        |                                 -----------
                                                        | <---(action indicting success)--|          |
                                                        |                                            |
                                                        | <---(action indicating failure)------------|





