import React from 'react';
import SidebarComponent from './components/SidebarComponent'
import './App.css';
import { Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  container: {
      height: '100vh'
  },
  content: {
      marginTop: 54
  },
  mainBlock: {
      backgroundColor: '#F7F8FC',
      padding: 30
  }
});
class App extends React.Component {

  state = { selectedItem: 'Tickets' };

  render() {
      const { selectedItem } = this.state;
      return (
          <Row className={css(styles.container)}>
              <SidebarComponent selectedItem={selectedItem} onChange={(selectedItem) => this.setState({ selectedItem })} />
          </Row>
      );
  }
}


export default App;
