import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function App() {
    let [val, setval] = useState([])
    useEffect(() => {
        axios.get('https://dummyjson.com/products')

            .then(function (response) {
                // handle success
                console.log(response.data.products);
                setval(response.data.products);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])
    return (
        <div className="row">
            <>
                {
                    val.map((item, ind) => {
                        return (
                            <div className="col-4">
                                <>
                                    <Link to="/Apple" className='link'>
                                        <Card className='main w-100'>
                                            <Card.Img variant="top" src={item.thumbnail} className='card-image' />
                                            
                                            <Card.Body>
                                                <Card.Title>{item.title}</Card.Title>
                                                <Card.Text>{item.description}</Card.Text>
                                                <Card.Text>Price: {item.price} </Card.Text>
                                                {/* <Card.Text>discountPercentage : {item.discountPercentage}</Card.Text> */}
                                            </Card.Body>
                                        </Card>
                                    </Link>
                                </>
                            
                            </div>
                        )
                    })
                }
            </>
        </div>
    );
}

export default App;
