import { Items } from './components/Items';
import { Info } from './components/Info';
import { RealTimeChart } from './components/RealTimeChart';

function App() {
  return (
    <div className="p-3" style={{ maxWidth: '100%' }}>
      <div className="p-mb-3">
        <RealTimeChart />
      </div>
      <div className="p-mb-3">
        <Info />
      </div>
      <div className="p-mb-3">
        <Items />
      </div>
    </div>
  );
}

export default App;
