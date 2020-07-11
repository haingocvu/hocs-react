import React from 'react';
import { isEmpty } from 'lodash';
import './Loader.css';
import { getDisplayName } from './../utils/componentHelper';
import hoistNonReactStatics from 'hoist-non-react-statics';

const Loading = loadingProp => WrappedComponent => {

    const WithLoading = React.forwardRef(function WithLoading(props, ref) {
        return (
            <LoadingHoc {...props} forwardedRef={ref} />
        )
    })

    class LoadingHoc extends React.Component {
        componentDidMount() {
            this.startTime = Date.now();
        }
        componentDidUpdate() {
            if (!isEmpty(this.props[loadingProp])) {
                this.endTime = Date.now();
            }
        }
        render() {
            const { forwardedRef } = this.props;
            const myProps = {
                loadingTime: ((this.startTime - this.endTime) / 1000).toFixed(2)
            };
            return isEmpty(this.props[loadingProp]) ? (
                <div className="loader"></div>
            ) : (
                    <WrappedComponent ref={forwardedRef} {...this.props} {...myProps} />
                )
        }
    };

    LoadingHoc.displayName = `WithLoading(${getDisplayName(WrappedComponent)})`;

    hoistNonReactStatics(LoadingHoc, WrappedComponent);

    return WithLoading;
}

export default Loading;