import Layout from "../../components/Layout/Layout";
import React from "react";
import { connect } from 'react-redux';
import { teacher as teacherActions } from '../../store/actions';
import store from '../../store';

const Dev = ({ teacher }) => {

    const classes = teacher.class;

    React.useEffect(() => {
        !classes && store.dispatch(teacherActions.getClass());
    }, []);

    return <Layout title = "Dev page">
        <div>{ classes ? classes.map((classItem) => <p>{ classItem.description }</p>) : 'find...' }</div>
    </Layout>;
}

export default connect(({ teacher }) => ({
    teacher
}))(Dev);