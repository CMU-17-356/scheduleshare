import useClasses from "../hooks/useClasses";
import ScrollableList from '../components/ScrollableList';
import Schedule from '../components/Schedule';
function AddClassesPage() {
  const {classes} = useClasses()
  return (
    <div className="App">
        <ScrollableList contents = {classes} isClass ={true}/>
        <Schedule scheduleList = "smth"/>
    </div>
  );
}

export default AddClassesPage;