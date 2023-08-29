import './app-info.css';

const AppInfo = ({employees, increased}) => {
    return (
        <div className="app-info">
            <h1>Accounting of employees in company The Other Store</h1>
            <h2>Total number of employees: {employees}</h2>
            <h2>The award will be given to: {increased}</h2>
        </div>
    );
}

export default AppInfo;