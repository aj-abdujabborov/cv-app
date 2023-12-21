/* eslint-disable react/prop-types */
import ContactName from './ContactName';
import ContactDetail from './ContactDetail';

export default function ContactSegment({ editMode, editMe, contactSegm }) {
  function getPropertyEditor(propName) {
    return function setProperty(prop) {
      editMe({
        ...contactSegm,
        [propName]: prop,
      });
    };
  }

  return (
    <div className="contactSegment">
      <ContactName
        editMode={editMode}
        text={contactSegm.name}
        editMe={getPropertyEditor('name')}
      ></ContactName>
      <div className="contactDetailsContainer">
        <ContactDetail
          editMode={editMode}
          text={contactSegm.address}
          editMe={getPropertyEditor('address')}
          placeholder="Address"
          classes="address"
        ></ContactDetail>
        <ContactDetail
          editMode={editMode}
          text={contactSegm.phone}
          editMe={getPropertyEditor('phone')}
          placeholder="Phone"
          classes="phone"
        ></ContactDetail>
        <ContactDetail
          editMode={editMode}
          text={contactSegm.email}
          editMe={getPropertyEditor('email')}
          placeholder="email@email.com"
          classes="email"
        ></ContactDetail>
      </div>
    </div>
  );
}
