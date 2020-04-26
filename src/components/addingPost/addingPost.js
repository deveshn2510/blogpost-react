import React from 'react';
import Style from './style.module.css'

class AddingPosts extends React.PureComponent {
    constructor(props) {
        super(props);
        //this.getPost();
        this.state = ({
            title: "",
            url: "",
            body: "",
            username: "",

        })
    }

    componentDidMount() {
        fetch("https://boiling-cove-25170.herokuapp.com/posts", {
            method: "GET",
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const getdiv = document.getElementById("getPost");
                for (var i = 0; i < data.length; i++) {
                    const divElement = document.createElement("div");
                    divElement.style.border = "solid 1px black"
                    divElement.innerHTML = data[i].title;
                    divElement.style.marginTop= '15px';
                    getdiv.appendChild(divElement);
                }


            })


    }



    dusraHandler = () => {
        console.log(this.state)


        const fetchQueries = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: this.state.title,
                url: this.state.url,
                body: this.state.body,
                username: this.state.username,
            })
        }
        fetch(`https://boiling-cove-25170.herokuapp.com/post`
            , fetchQueries)
            .then(res => res.json())
            .then(data => console.log(data))

        this.setState({
            title: "",
            url: "",
            body: "",
            username: "",

        })


    }

    render() {


        return (<div >
            <div  ><img className={Style.backgroundImage} alt='description of background' src='https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/tnc_16935516.jpg?crop=0,432,7360,4048&wid=4000&hei=2200&scl=1.84'></img></div>
            <div className={Style.postCollection}>
                <div className={Style.inputPost} id='post'><span>Post :     </span>   <input value={this.state.title} onChange={e => this.setState({ title: e.target.value })} /></div>
                <div className={Style.inputPost} id='url'>Image URL : <input value={this.state.url} onChange={e => this.setState({ url: e.target.value })} /></div>
                <div className={Style.inputPost} id='body'>Body : <input value={this.state.body} onChange={e => this.setState({ body: e.target.value })} /></div>
                <div className={Style.inputPost} id='username'>Username : <input value={this.state.username} onChange={e => this.setState({ username: e.target.value })} /></div>
                {/* <button type='submit' onClick={this.onClickHandler} > ADD</button> */}
                <button type='submit' onClick={this.dusraHandler} > ADD</button>
            </div>

            <div id="getPost">
            </div>



        </div>)
    }
}

export default AddingPosts;