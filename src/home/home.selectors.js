import { createSelector } from 'reselect';

export const getHome = state => state.home;

export const getHomeTitle = createSelector(getHome, home => home.homeTitle);

export const getHomeDetails = createSelector(getHome, home => home.homeDetails);
