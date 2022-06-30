import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faEnvelope, faMapMarkedAlt, faPhoneAlt, faSpaghettiMonsterFlying, faUnlockKeyhole, faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import { fetchUser } from '../services/UserServices';
import * as actions from '../state/ActionTypes'

const USERTITLE = { "name": "Hi, My name is", "email": "My email address is", "DOB": "My birthday is", "address": "My address is", "phone": "My phone number is", "password": "My password is" };
const USERICON  = { "name": faUserAlt, "email": faEnvelope, "DOB": faCalendarAlt, "address": faMapMarkedAlt, "phone": faPhoneAlt, "password": faUnlockKeyhole };
const KEYS = ["name", "email", "DOB", "address", "phone", "password"];
const Contact = (props) => {

 const user = useSelector((store)=>store.user)
 console.log("user..",user.name)
 const dispatch = useDispatch()

  function onHover(hoveredItem) {
    const payload = { title : USERTITLE[hoveredItem], info: user[hoveredItem], hoveredItem : hoveredItem}
    dispatch({type:actions.HOVERED,payload: payload})
  }


  useEffect(() => {
    console.log("use Effect")
    fetchUser().then( (payload) => dispatch({type:actions.FETCH_USERDATA, payload:payload}) )
    .catch((e)=>console.log("Error in fetching user data", e))
    
    console.log("use effect after dispatch",user)



  }, []);






  return <>

    <Card className="rel crd">
      <Card.Body>
      <div className='pb-4' >
          <img className="pic hcenter" src={user.imgurl}  style={{ visibility: user.imgurl ? "visible" : "hidden" }}/>
        </div>


        <div className='mid'>
          <div className='title'>{user.title}</div>
          <div className='info'>{user.info}</div>

        </div>
        <div className='mid'>
          <div >
            <ul className='iconlist ' >

              {
                KEYS.map((k) => {

                  return (
                    <li key={k} className={ (k==="email"?"d-none d-sm-block ":"") + 'm-1 m-sm-1 m-md-3  m-lg-4'}>
                      <div className={user.hoveredItem === k ? "active ease":"ease"} onMouseEnter={() => onHover(k)}>
                        <FontAwesomeIcon className='icon mid ' icon={USERICON[k]} />
                        <FontAwesomeIcon className='iconb mid ' icon={USERICON[k]} />
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
const mapStateToProps = function(state) {
  return {
    user : state.user
  }
}

export default connect(mapStateToProps)(Contact);
// export default Contact;