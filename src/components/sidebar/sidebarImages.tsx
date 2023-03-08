import home from '../../assets/navbar-assets/home.svg';
import bookmarks from '../../assets/navbar-assets/bookmarks.svg';
import explore from '../../assets/navbar-assets/explore.svg';
import lists from '../../assets/navbar-assets/lists.svg';
import messages from '../../assets/navbar-assets/messages.svg';
import more from '../../assets/navbar-assets/more.svg';
import notifications from '../../assets/navbar-assets/notifications.svg';
import profile from '../../assets/navbar-assets/profile.svg';

// const sidebarImages = [bookmarks, explore, lists, messages, more, notifications, profile];
const sidebarImages = [
  { image: home, text: 'Home' },
  { image: explore, text: 'Explore' },
  { image: notifications, text: 'Notifications' },
  { image: messages, text: 'Messages' },
  { image: bookmarks, text: 'BookMarks' },
  { image: lists, text: 'Lists' },
  { image: profile, text: 'Profile' },
  { image: more, text: 'More' }
];

export default sidebarImages;
