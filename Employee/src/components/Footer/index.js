import { Component } from "react"
import "./index.css"


class Footer extends Component{
    render (){
        return(
            <nav className = "navbar">
                
                    <div>
                        <button className = "button-style">Delete Selected</button>
                    </div>
                    <div class="pagination">
                        <a href="hello">&laquo;</a>
                        <a href="hello">1</a>
                        <a href="hello" class="active">2</a>
                        <a href="hello">3</a>
                        <a href="hello">4</a>
                        <a href="hello">5</a>
                        <a href="hello">6</a>
                        <a href="hello">&raquo;</a>
                    </div>
            
            </nav>
        )
    }
}

export default Footer