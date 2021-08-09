const raceService = jest.mock('./race.service.js');

let mockData;

raceService.findOne = jest.fn( id => Promise.resolve(
    mockData.find( r => r.id === id) ) 
);

raceService.__setMockData = data => mockData = data;

module.exports = raceService;
