import proPic from '../assets/image/ei_1751366588083-removebg-preview.png'
function Welcome() {
    return (
        <>

           <div className="welcome">
            <div className="profile-pic">
            <img src={proPic} alt="" srcset=""></img>
            </div>
             <h2>KONICHIWA</h2>
           <h2>My Name Is Divine</h2>
           </div>
        </>
    );
}

export default Welcome;