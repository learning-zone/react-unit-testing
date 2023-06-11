import renderer from 'react-test-renderer'
import Snapshots from './Snapshots'

/**
 * Snapshot tests are a useful when UI does not change frequently.
 */
describe('Snapshot Component', () => {

   test('Component render with Snapshots', () => {
      const tree = renderer.create(<Snapshots />).toJSON();
      expect(tree).toMatchSnapshot();
   })
});

