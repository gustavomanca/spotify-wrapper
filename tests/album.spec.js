import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { afterEach, beforeEach } from 'mocha';
import sinonStubPromise from 'sinon-stub-promise';

import { API_URL } from '../src/config';

import { getAlbum, getAlbums, getAlbumTracks } from '../src';

sinonStubPromise(sinon);

chai.use(sinonChai);

global.fetch = require('node-fetch');

describe('Album', () => {
  let stubedFetch;
  let promise;

  beforeEach(() => {
    stubedFetch = sinon.stub(global, 'fetch');
    promise = stubedFetch.resolves({ json: () => ({ album: 'name' }) });
  });

  afterEach(() => {
    stubedFetch.restore();
  });

  describe('Smoke tests', () => {
    it('should have getAlbum method', () => {
      expect(getAlbum).to.exist;
    });

    it('should have getAlbumTracks method', () => {
      expect(getAlbumTracks).to.exist;
    });
  });

  describe('getAlbum', () => {
    it('should call fetch method', () => {
      const album = getAlbum();

      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with correct url', () => {
      const album = getAlbum('4aawyA89vmqN3uQ7FjRGTy');
      expect(stubedFetch).to.have.been.calledWith(
        `${API_URL}/albums/4aawyA89vmqN3uQ7FjRGTy`
      );

      const album2 = getAlbum('4aawyA89vmqN3uQ7FjRGTk');
      expect(stubedFetch).to.have.been.calledWith(
        `${API_URL}/albums/4aawyA89vmqN3uQ7FjRGTk`
      );
    });

    it('should return correct data from Promise', () => {
      const album = getAlbum('4aawyA89vmqN3uQ7FjRGTy');

      album.then((data) => {
        expect(data).to.be.eql({ album: 'name' });
      });
    });
  });

  describe('getAlbums', () => {
    it('should call fetch method', () => {
      const albums = getAlbums();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with correct URL', () => {
      const albums = getAlbums([
        '4aawyA89vmqN3uQ7FjRGTy',
        '4aawyA89vmqN3uQ7FjRGTk',
      ]);
      expect(stubedFetch).to.have.been.calledWith(
        `${API_URL}/albums/?ids=4aawyA89vmqN3uQ7FjRGTy,4aawyA89vmqN3uQ7FjRGTk`
      );
    });

    it('should return correct data from Promise', () => {
      promise.resolves({ album: 'name' });
      const albums = getAlbums([
        '4aawyA89vmqN3uQ7FjRGTy',
        '4aawyA89vmqN3uQ7FjRGTk',
      ]);
      albums.then((data) => {
        expect(data).to.be.eql({ album: 'name' });
      });
    });
  });

  describe('getAlbumTracks', () => {
    it('should call fetch method', () => {
      const tracks = getAlbumTracks();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with correct URL', () => {
      const tracks = getAlbumTracks('4aawyA89vmqN3uQ7FjRGTy');
      expect(stubedFetch).to.have.been.calledWith(
        `${API_URL}/albums/4aawyA89vmqN3uQ7FjRGTy/tracks`
      );
    });

    it('should return correct data from Promise', () => {
      promise.resolves({ album: 'name' });
      const tracks = getAlbumTracks('4aawyA89vmqN3uQ7FjRGTy');
      tracks.then((data) => {
        expect(data).to.be.eql({ album: 'name' });
      });
    });
  });
});
