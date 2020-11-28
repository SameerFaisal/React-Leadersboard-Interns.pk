import React, { Component } from 'react';
import './studentStyling.css';

class Student extends Component{

    constructor(){
        super();
        this.state={
            score: 0,
            success: 0,
            failure: 0
        }
    }

    componentDidMount(){
        this.setState({
            score: this.props.score
        })
    }

    incScore(){
        this.setState({
            score: this.state.score+1
        },
            ()=>{
                if(this.state.score>=350){
                    this.setState({success:1})
                }
                if(this.state.score<350 && this.state.score>340){
                    this.setState({success:0})
                    this.setState({failure:0})

                }
            }
        )
    }

    decScore(){
        this.setState({
            score: this.state.score-1
        },
            ()=>{
                if(this.state.score<=340){
                    this.setState({failure:1})
                }
                if(this.state.score>340 && this.state.score<350){
                    this.setState({failure:0})
                    this.setState({success:0})
                }
            }
        )
    }

    render(){
        const isSuccess=this.state.success;
        const isFail=this.state.failure
        let succ,fail;
       

       if(isSuccess===1){
            succ=<span>Success</span>
        }
        else{
            succ=''
        }
        if(isFail===1){
            fail=<span>Failure</span>
        }
        else{
            fail=''
        }

        return (
            <div className="student">
                <div className="left">
                    <h2 className="studentName">
                        {this.props.name}
                        <button className="Scorebtn" onClick={ ()=> this.incScore() }>+</button>
                        <button className="Scorebtn" onClick={ ()=> this.decScore() }>-</button>
                    </h2>
                         <p className="universityName">{this.props.university} {succ} {fail}</p>
                </div>
                <div className="right">
                    <div className="score">{this.state.score}</div>
                </div>

            </div>
    );
}
}
export default Student;