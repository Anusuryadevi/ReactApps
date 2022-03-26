import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faEnvelope, faMapMarkedAlt, faPhoneAlt, faSpaghettiMonsterFlying, faUnlockKeyhole, faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from 'react';
import { useState } from 'react';

// var userInfo = {"name": "Anusuryadevi S R", "email":"anusurya.ravi@gmail.com","DOB":"08 Jun 1995",
// "address":"Coimbatore, Tamilnadu","phone":"9047806562","password":"*******"};
const userTitle = { "name": "Hi, My name is", "email": "My email address is", "DOB": "My birthday is", "address": "My address is", "phone": "My phone number is", "password": "My password is" };

export default function Contact() {

  const [user, setUser] = useState({});
  const [info, setInfo] = useState("");
  const [title, setTitle] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  function onHover(hoveredItem) {
  //  console.log(user);
    let UserInfo = "";
    switch (hoveredItem) {
      case "name":
        UserInfo = user.results[0].name.first + " " + user.results[0].name.last;
        break;
      case "email":
        UserInfo = user.results[0].email;
        break;
      case "phone":
        UserInfo = user.results[0].phone;
        break;
      case "DOB":
        UserInfo = user.results[0].dob.date;
        break;
      case "address":
        UserInfo = user.results[0].location.city + " " + user.results[0].location.country;
        break;
      case "password":
        UserInfo = user.results[0].login.password;
        break;
    }
    setInfo(UserInfo);
    setTitle(userTitle[hoveredItem]);
  }


  useEffect(() => {
    let user = [];


    fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(data => {
        setUser(data);
        setImgUrl(data.results[0].picture.large);
        setInfo(data.results[0].name.first + " " + data.results[0].name.last);
      //  console.log(userTitle.name);
        setTitle(userTitle.name);
      });



  }, []);






  return <>

    <Card className="rel crd">
      <Card.Body>
        <div className='pb-4' >
          <img className="pic hcenter" src={imgUrl} style={{visibility: imgUrl ? "visible" : "hidden"}}/>
        </div>


        <div className='mid'>
          <div className='title'>{title}</div>
          <div className='info'>{info}</div>

        </div>
        <div className='mid'>
          <div >
            <ul className='iconlist ' >
              <li className='m-1 m-sm-1 m-md-3  m-lg-4 mid ' onMouseEnter={() => onHover("name")}>
                <FontAwesomeIcon icon={faUserAlt} />
              </li>
              <li className='m-1  m-sm-1 m-md-3 m-lg-4 mid d-none d-sm-block' onMouseEnter={() => onHover("email")}>
                <FontAwesomeIcon icon={faEnvelope} />
              </li>
              <li className='m-1  m-sm-1 m-md-3 m-lg-4 mid' onMouseEnter={() => onHover("DOB")}>
                <FontAwesomeIcon icon={faCalendarAlt} />
              </li>
              <li className='m-1  m-sm-1 m-md-3 m-lg-4 mid' onMouseEnter={() => onHover("address")}>
                <FontAwesomeIcon icon={faMapMarkedAlt} />
              </li>
              <li className='m-1  m-sm-1 m-md-3 m-lg-4 mid' onMouseEnter={() => onHover("phone")}>
                <FontAwesomeIcon icon={faPhoneAlt} />
              </li>
              <li className='m-1  m-sm-1 m-md-3 m-lg-4 mid' onMouseEnter={() => onHover("password")}>
                <FontAwesomeIcon icon={faUnlockKeyhole} />
              </li>
            </ul>
          </div>
        </div>
      </Card.Body>
    </Card>

  </>
}