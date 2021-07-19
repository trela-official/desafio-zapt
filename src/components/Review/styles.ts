import styled from 'styled-components'

export const Review = styled.li`
  list-style: none;
  background-color: #E9F4FE;
  max-width: 400px;
  padding: 20px;
  border-radius: 4px;
  transition: transform .7s;

  &:hover{
    transform: scale(1.2);
    z-index: 1;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
  }
  `

export const TextReview = styled.article`
  color: #011FBB;
  line-height: 1.5rem;
  font-size: 1rem;
  font-weight: 400;
  `

export const Person = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  gap: 10px;
  `

export const Name = styled.p`
  font-size: 0.875rem;
  font-weight: 400;
  color: #001C33;
  `