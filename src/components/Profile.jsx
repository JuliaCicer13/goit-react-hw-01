
export default function Profile({name, tag, location, image, status }) {
   
    return (
      <>
        <div>
  <div className="card">
     <img src ={name} alt="Useravatar"/>
       <p>{name}</p>
       <p>{tag}</p>
       <p>{location}</p> 
       <p>{image}</p>
       <p>{status}</p> 
  </div>

  <ul>
    <li>
      <span>Followers</span>
      <span>1000</span>
    </li>
    <li>
      <span>Views</span>
      <span>2000</span>
    </li>
    <li>
      <span>Likes</span>
      <span>3000</span>
    </li>
  </ul>
</div>
      </>
    );
  };

 