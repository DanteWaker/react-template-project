import {
  FaComment,
  FaHeart,
  FaChartLine,
  FaTrophy,
  FaCommentDots,
  FaUsers,
  FaUserTie,
  FaThumbsUp,
  FaCompass,
  FaSmile,
  FaHeartbeat,
  FaSeedling,
  FaFlag,
} from 'react-icons/fa'

export const TableHeaderTitle = [
  { title: 'Participation (%)', id: 'participation', icon: <FaComment /> },
  { title: 'eNPS', id: 'enps', icon: <FaHeart /> },
  { title: 'Overall Engagement', id: 'engagement', icon: <FaChartLine /> },
  { title: 'Recognition', id: 'recognition', icon: <FaTrophy /> },
  { title: 'Feedback', id: 'feedback', icon: <FaCommentDots /> },
  {
    title: 'Relationship with peers',
    id: 'relationship_peers',
    icon: <FaUsers />,
  },
  {
    title: 'Relationship with manager',
    id: 'relationship_manager',
    icon: <FaUserTie />,
  },
  { title: 'Satisfaction', id: 'satisfaction', icon: <FaThumbsUp /> },
  { title: 'Alignment', id: 'alignment', icon: <FaCompass /> },
  { title: 'Happiness', id: 'happiness', icon: <FaSmile /> },
  { title: 'Wellness', id: 'wellness', icon: <FaHeartbeat /> },
  { title: 'Personal growth', id: 'personal_growth', icon: <FaSeedling /> },
  { title: 'Ambassadorship', id: 'ambassadorship', icon: <FaFlag /> },
]
