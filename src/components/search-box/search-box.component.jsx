import { Component } from "react";

//styles are present in all of the app. This just makes the code more organized and readable but this style can be applied to the whole application
//regardless of what file this is in. It can be used in app.js even if its not imported in it.
import "./search-box.styles.css";

class Searchbox extends Component {
    render() {
        const { className, placeholder, onChangeHandler } = this.props;
        return (
            <div>
                <input className={`search-box ${className}`}
                    type='search'
                    placeholder={placeholder}
                    onChange={onChangeHandler} />
            </div>
        );
    }
}

export default Searchbox;