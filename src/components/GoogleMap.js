import React ,{Component} from 'react';

class GoogleMap extends Component{
 componentDidMount(){
     console.log("Component Did Mount");
     new google.maps.Map(this.refs.map,{
         zoom:12,
         center:{
             lat:this.props.lat,
             lng:this.props.lon
         }
    });
 }
 render(){
     console.log("In render............");
     //ref is ued to reference an existing rendered element to the page
     //this.refs.map
     console.log(this.refs);
     console.log(this.props);
     return <div ref="map"/>;
    }
 }
export default GoogleMap;