import PropTypes from 'prop-types';

function Widget({ widget, removeWidget }) {
  return (
    <div className="widget">
      <h3>{widget.name}</h3>
      <p>{widget.text}</p>
      <button onClick={removeWidget}>Remove</button>
    </div>
  );
}

Widget.propTypes = {
  widget: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
  removeWidget: PropTypes.func.isRequired,
};

export default Widget;
















// import PropTypes from 'prop-types';
// import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';

// function Widget({ widget }) {
//   const renderContent = () => {
//     switch (widget.type) {
//       case 'circle':
//         return (
//           <CircularProgressbar
//             value={widget.connected}
//             text={${widget.connected}%}
//             styles={buildStyles({
//               pathColor: '#4caf50',
//               textColor: '#000',
//             })}
//           />
//         );
//       case 'riskCircle':
//         return (
//           <div className="risk-circle">
//             <CircularProgressbar
//               value={widget.high}
//               text={${widget.high}% High}
//               styles={buildStyles({
//                 pathColor: '#f44336',
//                 textColor: '#000',
//               })}
//             />
//             <CircularProgressbar
//               value={widget.medium}
//               text={${widget.medium}% Medium}
//               styles={buildStyles({
//                 pathColor: '#ff9800',
//                 textColor: '#000',
//               })}
//             />
//             <CircularProgressbar
//               value={widget.low}
//               text={${widget.low}% Low}
//               styles={buildStyles({
//                 pathColor: '#4caf50',
//                 textColor: '#000',
//               })}
//             />
//           </div>
//         );
//       default:
//         return <p>{widget.text}</p>;
//     }
//   };

//   return (
//     <div className="widget">
//       <h3>{widget.name}</h3>
//       <div className="widget-body">{renderContent()}</div>
//     </div>
//   );
// }

// Widget.propTypes = {
//   widget: PropTypes.shape({
//     id: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     type: PropTypes.string.isRequired,
//     connected: PropTypes.number,
//     notConnected: PropTypes.number,
//     high: PropTypes.number,
//     medium: PropTypes.number,
//     low: PropTypes.number,
//     text: PropTypes.string,
//   }).isRequired,
// };

// export default Widget;