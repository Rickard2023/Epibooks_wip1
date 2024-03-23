import React, { useContext, useEffect } from 'react'
import { Context } from '../Context/ContextProvider'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import fantasy from 'C:\\Epicode\\NPX\\epibooks\\src\\JSON\\fantasy'
import history from 'C:\\Epicode\\NPX\\epibooks\\src\\JSON\\history'
import horror from 'C:\\Epicode\\NPX\\epibooks\\src\\JSON\\horror'
import romance from 'C:\\Epicode\\NPX\\epibooks\\src\\JSON\\romance'
import scifi from 'C:\\Epicode\\NPX\\epibooks\\src\\JSON\\scifi'

export default function AllTheBooks() {

  const {ticks} = useContext(Context);
  console.log(ticks);

  let list = [...fantasy, ...history, ...horror, ...romance, ...scifi];


  /*
  useEffect(() => {   // ogni volta che ticks varia, esegui useEffect

     let i = 0;
     list.filter(el => {
        if(el.category === ticks[i]){

        }
        i++;
     })
  }, [ticks]);
  */
  console.log(list);
  return ( 
   
    <div className="row">
    {list.map((el) => 
      {for(let i = 0; i < 5; i++)
        {
            if(ticks[i] === el.category) {
                <div key={el.asin} id={el.asin}>
                    <Card style={{ width: '18rem' }} className="p-4 ms-4 md-4">
                    <Card.Img variant="404" src={el.Img} height={100} width={180}/>
                    <Card.Body>
                        <Card.Title>{el.title}</Card.Title>
                        <Card.Text>
                        {el.title}
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    </Card>
                </div>
                
            }
        }      
      }
    )};
   </div>

  );
}

