import Header from "./Components/Header";
import Main from "./Components/Main";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import GreeksTable from "./Components/GreeksTable";
import PositionsTable from "./Components/PositionsTable";


function App() {
  const tabBtn = 'py-1 px-2 bg-white border text-indigo-500 border-none focus:bg-indigo-500 ease-in-out duration-300 mr-3 focus:text-white font-semibold focus:rounded-lg rounded-lg shadow-black/50 shadow-md '
  return (
    <div >
      <Header></Header>
      <Main></Main>


      <div className="my-10 px-10">
        <Tabs>
          <TabList className='flex mb-5'>
            <Tab className={`${tabBtn} mr-4`}>Option Chain</Tab>
            <Tab  className={`${tabBtn} mr-4`}>Strategies</Tab>
            <Tab className={`${tabBtn} mr-4`}>Position</Tab>
            <Tab className={`${tabBtn} mr-4`}>Greeks</Tab>
          </TabList>

          <TabPanel>
            <h2>Any content 1</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>

          {/* position content  */}

          <TabPanel>

            <PositionsTable></PositionsTable>
          </TabPanel>


          <TabPanel>
            <GreeksTable></GreeksTable>
          </TabPanel>
        </Tabs>

      </div>
    </div >
  );
}

export default App;
