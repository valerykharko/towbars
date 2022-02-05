// import React from 'react';
// import styles from "components/Catalog/Catalog.module.scss";
//
// const BallTypeFilter = () => {
//   return (
//     <div className={styles.ballTypes}>
//       <div className={styles.ballTypesTitle}>
//         <span>Тип шара</span>
//       </div>
//       <div className={styles.listOfBallTypes}>
//         {manufacturers.map((manufacturer) => (
//           <div key={manufacturer.id}>
//             <input
//               type="checkbox"
//               checked={
//                 !!stateToFind.find(
//                   (elem) => elem?.name === manufacturer?.name
//                 )
//               }
//               onChange={() => setStateForFindAction(manufacturer)}
//             />
//             <span>{manufacturer.name}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
//
// export default BallTypeFilter;