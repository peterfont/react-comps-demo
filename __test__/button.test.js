import React from 'react'
import {mount, shallow} from 'enzyme'

// function Fixture() {
//   return (
//     <div>
//       <input id="checked" defaultChecked />
//       <input id="not" defaultChecked={false} />
//       <input id="tertiary" defaultChecked checked={false} />
//     </div>
//   );
// }

// const wrapper = mount(<Fixture />); // mount/render/shallow when applicable



// test('demo', () => {
//   expect(wrapper.find('#checked')).toBeChecked();
//   expect(wrapper.find('#not')).not.toBeChecked();
// });
function EmptyRenderFixture() {
  return null;
}

function NonEmptyRenderFixture() {
  return (
    <div>
      <EmptyRenderFixture />
    </div>
  );
}

const wrapper = mount(<EmptyRenderFixture />); // mount/render/shallow when applicable

test('demo', () => {
  expect(wrapper.find('EmptyRenderFixture')).toBeEmptyRender();
  // expect(wrapper).not.toBeEmptyRender();
});
