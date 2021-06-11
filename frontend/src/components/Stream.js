import { makeStyles } from '@material-ui/core/styles';
import Iframe from 'react-iframe'
const useStyles = makeStyles((theme) => ({  

main: {

backgroundColor:'black',
width :'100%',

}


}))






function Stream() {
    const classes = useStyles();
   
  return (
    <div  className={classes.main} >
<Iframe url="http://www.youtube.com/embed/xDMP3i36naA"
     position="absolute"
     width="100%"
     id="myId"
     className="myClassname"
     height="80%"
     styles={{height: "25px"}}/>
       <button >Display Video</button>


</div>

  );
}

export default Stream;
