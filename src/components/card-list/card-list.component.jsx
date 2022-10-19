import { Component } from "react";
import Card from "../card/card.component";
//styles
import "./card-list.styles.css";
//Components re-render when either setState is called or when props change.
class CardList extends Component {
    render() {
        console.log("render");
        const { monsters } = this.props;
        return (
            <div className="card-list">
                {monsters.map((monster) => {
                    const { id, name, email } = monster;
                    return (
                        <Card monster={monster} />
                    )
                })}
            </div>
        )
    }
}

export default CardList;