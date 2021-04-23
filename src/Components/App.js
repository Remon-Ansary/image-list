import react from 'react'
import axios from 'axios'
import SearchInput from './Searchinput'
import React from 'react'
import ImageList from './imageList';

class App extends React.Component {

       state = { images: [] }

 onSearchSubmit = async(entry) =>{
      //  console.log(entry)
        const response = await axios.get(`https://pixabay.com/api/?key=21294327-fba23537acd58c30e900380db&q=${entry}&image_type=photo`)
        console.log(response.data.hits)
        this.setState({images:response.data.hits})
    }

    render() {
        return (
            <div className='ui container' style={{ marginTop: '30px' }}>
                <SearchInput onSearchSubmit={this.onSearchSubmit} />
                <ImageList images ={this.state.images}/>
            </div>
        )
    }
}
export default App;