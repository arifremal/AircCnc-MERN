import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Container from "../Shared/Container";
import Card from "./Card/Card";
import Loader from "./Loader/Loader";
import { useSearchParams } from "react-router-dom";
import Heading from "./Heading/Heading";

const Rooms = () => {
    const [params,setParams]= useSearchParams()
    const category = params.get('category')
    console.log(category);
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("./../../public/data/rooms.json")
      .then((res) => res.json())
      .then((data) => {
        if(category){
          const filtered= data.filter(room => room.category === category)
          setRooms(filtered);
        } else{
          setRooms(data);
        }
        
        setLoading(false)
      });
  }, [category]);
  if (loading) {
    return <Loader/>
  }
  return (
    <Container>
      {
        rooms && rooms.length>0 ? <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8 ">
        {rooms.map((room) => (
          <Card
          room={room}
          ></Card>
        ))}
      </div> : <div className="pt-12"> <Heading 
      title={'No rooms Available in this category'}
      subtitle={'Please select other categories'}
      center={true}
      ></Heading> </div>
      }
    </Container>
  );
};

export default Rooms;
