import { memo } from "react";
import { cn as bem } from '@bem-react/classname';
import PropTypes from 'prop-types';
import './style.css'
import { Link } from "react-router-dom";


function PageList({ page, totalPages, onPageChange }) {
  const cn = bem('PageList');
  page = parseInt(page, 10);
  const callbacks = {
    changePage: (e) => onPageChange(e)
  }

  const handlepageClick = (clickedPage) => {
    onPageChange(clickedPage)
  }
  let content = [];
  const dots = <p className="dots">...</p>;
  const lastPage = generateLink(totalPages);
  const firstPage = generateLink(1);

  if (page < 4) {
    for (let i = 1; i < 4; i++) {
      content.push(generateLink(i, page === i));
    }
    page == 3 ? content.push(generateLink(4)) : '';
    return (
      <div className={cn()}>
        {content}
        {dots}
        {lastPage}
      </div>
    );
  }

  if (page > totalPages - 3) {
    page == totalPages - 2 ? content.push(generateLink(totalPages - 3)) : '';
    for (let i = totalPages - 2; i <= totalPages; i++) {
      content.push(generateLink(i, page === i));
    }
    return (
      <div className={cn()}>
        {firstPage}
        {dots}
        {content}
      </div>
    );
  }

  return (
    <div className={cn()}>
      {firstPage}
      {dots}
      {generateLink(page - 1)}
      {generateLink(page, true)}
      {generateLink(page + 1)}
      {dots}
      {lastPage}
    </div>
  );
}

function generateLink(num, isCurent) {
  return <Link className={isCurent ? 'page selected' : 'page'} to={`/page/${num}`}>{num}</Link>;
}

PageList.propTypes = {
  onPageChange: PropTypes.func
}

export default memo(PageList);