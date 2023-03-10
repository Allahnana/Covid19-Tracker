import React from "react";
import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";



// import Card from "./components/Cards/Cards";
// import Chart from "./components/Chart/Chart";
// import CountryPicker from "./components/CountryPicker/CountryPicker";

    // FUNCTIONAL COMPONENT

// function App() {
//     return (
//         <div className={styles.container}>
//             <Cards />
//             <CountryPicker />
//             <Chart />
//         </div>
//     );
//     }

// export default App;



// CLASS COMPONENT

class App extends React.Component {
    async componentDidMount() {
        const data = await fetchData();
        console.log(data);
    }

    
    render() {
        return (
            <div className={styles.container}>
                <Cards />
                <CountryPicker />
                <Chart />
            </div>
        );
    }
}

export default App;


