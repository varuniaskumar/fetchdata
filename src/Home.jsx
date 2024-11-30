import {useState} from 'react';
export default function Home() {

        const [arryData, setarryData] = useState();

        const [id,setId] = useState();

  function getFormData(){
    console.log("id " +  id);
    let url =  'https://jsonplaceholder.typicode.com/posts/'+id;
    console.log(url);
    fetch(url)
    .then((response) => response.json())
    .then((res) => setarryData(res));
  }
   
    return (
        <div>
            <form>
                <div>
                    <input type="text" placeholder='enter the id' onChange={(e) => {setId(e.target.value)}}/>
                </div>
                <div>
                    <button type="button" onClick={getFormData}>Details</button>
                </div>
                <div>
                 <p>User Id ={arryData && arryData.userId}</p>
                  <p>ID  = {arryData && arryData.id}</p>
                  <p>Titlr={arryData && arryData.title}</p>
                  <p> body= {arryData && arryData.body}</p>
                </div>
            </form>
        </div>
    )
}