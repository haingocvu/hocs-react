import React from 'react';
import { getDisplayName } from '../utils/componentHelper';
import hoistNonReactStatics  from 'hoist-non-react-statics';

function withReverseText(WrappedComponent) {
    class WithReverseText extends React.Component {
        render() {
            const { children, ...props } = this.props;
            return (
                <WrappedComponent {...props}>
                    {children.split("").reverse().join("")}
                </WrappedComponent>
            )
        }
    }
    WithReverseText.displayName = `WithReverseText(${getDisplayName(WrappedComponent)})`;
    hoistNonReactStatics(WithReverseText, WrappedComponent);
    return WithReverseText;
}

export { withReverseText };