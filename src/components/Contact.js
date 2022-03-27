import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faEnvelope, faMapMarkedAlt, faPhoneAlt, faSpaghettiMonsterFlying, faUnlockKeyhole, faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from 'react';
import { useState } from 'react';


const USERTITLE = { "name": "Hi, My name is", "email": "My email address is", "DOB": "My birthday is", "address": "My address is", "phone": "My phone number is", "password": "My password is" };
const USERICON  = { "name": faUserAlt, "email": faEnvelope, "DOB": faCalendarAlt, "address": faMapMarkedAlt, "phone": faPhoneAlt, "password": faUnlockKeyhole };
const KEYS = ["name", "email", "DOB", "address", "phone", "password"];

export default function Contact() {

  const [user, setUser] = useState({});
  const [info, setInfo] = useState("");
  const [title, setTitle] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [hovered,setHovered] = useState("");

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
    setTitle(USERTITLE[hoveredItem]);
    setHovered(hoveredItem);
  }


  useEffect(() => {
    let user = [];


    fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(data => {
        setUser(data);
        setImgUrl(data.results[0].picture.large);
        setInfo(data.results[0].name.first + " " + data.results[0].name.last);
        //  console.log(USERTITLE.name);
        setTitle(USERTITLE.name);
      });



  }, []);






  return <>

    <Card className="rel crd">
      <Card.Body>
        <div className='pb-4' >
          <img className="pic hcenter" src={imgUrl} style={{ visibility: imgUrl ? "visible" : "hidden" }} />
        </div>


        <div className='mid'>
          <div className='title'>{title}</div>
          <div className='info'>{info}</div>

        </div>
        <div className='mid'>
          <div >
            <ul className='iconlist ' >

              {
                KEYS.map((k) => {

                  return (
                    <li key={k} className={ (k==="email"?"d-none d-sm-block ":"") + 'm-1 m-sm-1 m-md-3  m-lg-4'}>
                      <div className={hovered === k ? "active ease":"ease"} onMouseEnter={() => onHover(k)}>
                        <FontAwesomeIcon className='icon mid ' icon={USERICON[k]} />
                        <FontAwesomeIcon className='iconb mid ' icon={USERICON [k]} />
                      </div>
                    </li>
                  );

                })
              }


            </ul>
          </div>
        </div>
      </Card.Body>
    </Card>

  </>
}