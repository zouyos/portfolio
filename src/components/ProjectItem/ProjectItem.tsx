import style from './style.module.css';
import { useState } from 'react';
import { THEME, useThemeModeContext } from '@/contexts/ThemeModeContext';
import DropDownButton from '@/components/DropDownButton/DropDownButton';
import { Project } from '@/types/types';

type ProjectItemProps = {
  project: Project | null;
  onClick: (project: Project | null) => void;
  isSelected: boolean;
};

const ProjectItem = ({ project, onClick, isSelected }: ProjectItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const { themeMode } = useThemeModeContext();

  function formatDate(date: Date) {
    const formattedDate = date
      .toLocaleString('en-US', {
        month: 'short',
        year: 'numeric',
      })
      .toLowerCase();
    const parts = formattedDate.split(' ');
    return `${parts[0]}. ${parts[1]}`;
  }

  const handleLinkClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLElement;

    if (target.classList.contains('visit')) {
      window.open(project?.visit_link, '_blank');
    } else if (target.classList.contains('github_link')) {
      window.open(project?.github_link, '_blank');
    } else if (target.classList.contains('github_front')) {
      window.open(project?.github?.front, '_blank');
    } else if (target.classList.contains('github_back')) {
      window.open(project?.github?.back, '_blank');
    }
  };

  return (
    <div
      className={style.card}
      style={{
        outline:
          isHovered || isSelected
            ? `2px solid ${THEME[themeMode].borderHoverColor}`
            : undefined,
        backgroundColor: THEME[themeMode].primaryBackgroundColor,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onClick(project)}
    >
      <div className='flex justify-center mb-2'>
        <img src={project?.image} className={style.img} />
      </div>
      <p
        className='text-2xl'
        style={{
          color: THEME[themeMode].primaryColor,
        }}
      >
        {project?.name}
      </p>
      <p
        className={`para my-3 ${style.desc}`}
        style={{
          color: THEME[themeMode].secondaryColor,
        }}
      >
        {project?.short_description}
      </p>
      <div className='mb-5'>
        {project?.visit_link && (
          <button
            className='bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-600 mr-2 visit'
            onClick={handleLinkClick}
          >
            Visit
          </button>
        )}
        {project?.github_link && (
          <button
            className='bg-gray-500 text-white font-medium px-3 py-2 rounded-md hover:bg-gray-600 github_link'
            onClick={handleLinkClick}
          >
            Github
          </button>
        )}
        {project?.github && <DropDownButton onClick={handleLinkClick} />}
      </div>
      <hr className='my-3' />
      <div
        className='pb-0 text-semibold text-lg'
        style={{
          color: THEME[themeMode].primaryColor,
        }}
      >
        {project && formatDate(new Date(project.created_at))}
      </div>
    </div>
  );
};

export default ProjectItem;
