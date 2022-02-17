import React, { Component } from 'react';
import {connect} from 'react-redux';
import RankContainer from  './containers/RankContainer'
import logo from './logo.svg';
import {AppBar, Box, Typography, Container, Grid, Card, CardContent, Toolbar, Button, ButtonGroup, Avatar, Chip, Link, List, ListItem, ListItemText} from '@mui/material';
import { styled } from '@mui/material/styles';
import './App.css';
// import './styles.scss';



const App = () => {
  return (
      <div className="App">
        <header>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
          <title>D.com Daily Commit</title>
        </header>

        <AppBar position="static"
                color="inherit">
            <Toolbar>
              <Typography
                  variant="h5"
                  noWrap
                  component="div"
              >
                D.com Daily Commit
              </Typography>
              <Box sx={{ flexGrow: 1 }}/>
              <Box>
                <Button size="large">
                  RULES
                </Button>
                <Button size="large">
                  RANKING
                </Button>
                <Button size="large">
                  LOGIN
                </Button>
              </Box>
            </Toolbar>
          </AppBar>

        <Grid container spacing={{xs: 2, md: 5}} sx={{padding: 2}}>
          <Grid item xs={1} lg={2}/>
          <Grid item xs={12} lg={8}>
            <Box sx={{padding: 2}}>
              <Typography
                  variant="h5"
                  noWrap
                  component="div"
                  sx={{}}
              >
                RULES
              </Typography>
              <List sx={{}}>
                <ListItemText sx={{textAlign: "left"}} primary="1. 개인 계정에 1일 1커밋을 목표로 합니다."/>
                <ListItemText sx={{textAlign: "left"}} primary="2. 개인 프로젝트/알고리즘/블로깅 등 어떤 커밋이든지 상관 없습니다."/>
                <ListItemText sx={{textAlign: "left"}} primary="3. 커밋은 절대 강요하거나 눈치주지 않습니다. 오직 벌금만 강요합니다!"/>
                <ListItemText sx={{textAlign: "left"}} primary="4. 매주 일요일마다 집계 (일-토 기준), 커밋 한번 빠졌을 때마다 벌금 1,000원 입니다."/>
                <ListItemText sx={{textAlign: "left"}} primary="5. 귀찮아서/경조사/여행 기타 등등 사유 상관없이 빠지면 벌금입니다. 그냥 맘편하게 내세요!"/>
              </List>
            </Box>
            <Box sx={{padding: 2}}>
              <Typography
                  variant="h5"
                  noWrap
                  component="div"
              >
                RANKING
              </Typography>
              <RankContainer/>
            </Box>
          </Grid>
          <Grid item xs={1} lg={2}/>
        </Grid>
      </div>
  );
}

function StateToProps(state){
  return {
    state : state
  }
}

export default connect(StateToProps)(App);
