import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { fetchOneStream, editStream } from '../../actions'
import StreamForm from './StreamForm';
import '../../style/App.css'

class StreamEdit extends React.Component {
    componentDidMount() {
        this.props.fetchOneStream(this.props.match.params.id)
    }

    //use this to receive form values
    onSubmit = (formValues) => {
        this.props.editStream(this.props.match.params.id, formValues)
    }

    render() {
        if (!this.props.stream) {
            return <div>Loading...</div>
        }

        return(
            <div>
                <h2 className="stream-header">Edit stream</h2>
                <StreamForm 
                initialValues={_.pick(this.props.stream, 'title', 'description')} 
                onSubmit={this.onSubmit} 
                />
            </div>
        )
    } 

}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps, {fetchOneStream, editStream})(StreamEdit)