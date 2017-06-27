import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../action/index';
class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state={term:''};
        this.formSubmit=this.formSubmit.bind(this);
        this.changeInputForm=this.changeInputForm.bind(this);
    }
    changeInputForm(event){
        this.setState({term:event.target.value});
    }
    formSubmit(event){
        event.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({term:''});
    }
    render(){
        return (
            <form className="input-group" onSubmit={this.formSubmit}>
                <input className="form-control"
                       placeholder="type city name to get 5 days forcast"
                       value={this.state.term}
                       onChange={this.changeInputForm}/>
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchWeather},dispatch);
}
export default connect(null,mapDispatchToProps)(SearchBar);