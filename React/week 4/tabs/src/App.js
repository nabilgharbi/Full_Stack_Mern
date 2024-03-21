import './App.css';
import Tabs from './components/Tabs';

function App() {

  const tab_list = [
    {tab_name: "Tab 1", tab_content: "tab 1 content is showing here.", callback(){
      console.log(this.tab_name, "was clicked");
    }},
    {tab_name: "Tab 2", tab_content: "tab 2 content is showing here.", callback(){
      console.log(this.tab_name, "was clicked");
    }},
    {tab_name: "Tab 3", tab_content: "tab 3 content is showing here.", callback(){
      console.log(this.tab_name, "was clicked");
    }},
  ];

  return (
    <div className="App">
      <Tabs tab_list={tab_list}/>
    </div>
  );
}

export default App;
