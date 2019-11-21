import React from 'react';
import Icon from '@material-ui/core/Icon'
import TextArea from 'react-textarea-autosize'
import Card from '@material-ui/core/Card'

class TrelloActionButton extends React.Component {
    state = {
        formOpen: false,
        text: ""
    }

    renderAddButton = () => {
        const { list } = this.props;

        const buttonText = list ? "Add another list" : "Add another card"
        const buttonTextOpacity = list ? 1 : 0.5;
        const buttonTextColor = list ? "white" : "inherit";
        const buttonTextBackground = list ? "rgba(0,0,0,.15)" : "inherit";

        

        return (
            <div onClick={this.openForm} style={{...styles.openForButtonGroup, opacity: buttonTextOpacity, color: buttonTextColor, background: buttonTextBackground }}>
                <Icon>add</Icon>
                <p>{buttonText}</p>
            </div>
        )
    };

    openForm = () => {
        this.setState({
            formOpen: true
        })
    }
    closeForm = (e) => {
        this.setState({
            formOpen: false
        })
    }

    handleInputChange = e => {
        this.setState({
            text: e.target.value
        })
    }

    renderForm = () => {
        const { list } = this.props;

        const placeholder = list ? "Enter list title..." : "Enter a title for this card...";

        const buttonTitle = list ? "Add list" : "Add Card";

        return <div>
            <Card>
                <TextArea value={this.state.text} placeholder={placeholder} autoFocus onBlur={this.closeForm} onChange={this.handleInputChange}/>
            </Card>
        </div>

    }

    render() {
        return this.state.formOpen ? this.renderForm() : this.renderAddButton()
    }
}

const styles = {
    openForButtonGroup: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        borderRadius: 3,
        height: 36,
        width: 272,
        paddingLeft: 10
    }
}

export default TrelloActionButton