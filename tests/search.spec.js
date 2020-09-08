import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
import { afterEach, beforeEach } from 'mocha';

import { API_URL } from '../src/config';

import {
  search,
  searchAlbums,
  searchArtists,
  searchTracks,
  searchPlaylists,
} from '../src';

chai.use(sinonChai);
sinonStubPromise(sinon);

global.fetch = require('node-fetch');

describe('Search', () => {
  let fetchedStub;
  let promise;

  beforeEach(() => {
    fetchedStub = sinon.stub(global, 'fetch');
    promise = fetchedStub.resolves({ json: () => ({ body: 'json' }) });
  });

  afterEach(() => {
    fetchedStub.restore();
  });

  describe('Smoke Tests', () => {
    it('should exists search method', () => {
      expect(search).to.exist;
    });

    it('should exists searchAlbums method', () => {
      expect(searchAlbums).to.exist;
    });

    it('should exists searchArtists method', () => {
      expect(searchArtists).to.exist;
    });

    it('should exists searchTracks method', () => {
      expect(searchTracks).to.exist;
    });

    it('should exists searchPlaylists method', () => {
      expect(searchPlaylists).to.exist;
    });
  });

  describe('Generic Search', () => {
    it('should call fetch function', () => {
      const artists = search();
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should receive correct url to fetch', () => {
      context('Passing single type', () => {
        const artists = search('Incubus', 'artist');
        expect(fetchedStub).to.have.been.calledWith(
          `${API_URL}/search?q=Incubus&type=artist`
        );

        const albums = search('Incubus', 'album');
        expect(fetchedStub).to.have.been.calledWith(
          `${API_URL}/search?q=Incubus&type=album`
        );
      });

      context('Passing multiple types', () => {
        const artistsAndAlbums = search('Incubus', ['artist', 'album']);
        expect(fetchedStub).to.have.been.calledWith(
          `${API_URL}/search?q=Incubus&type=artist,album`
        );
      });
    });

    it('should return JSON data from promise', () => {
      promise.resolves({ body: 'json' });

      const artists = search('Incubus', 'artist');

      artists.then((data) => {
        expect(data).to.be.eql({ body: 'json' });
      });
    });
  });

  describe('searchArtists', () => {
    it('should call fetch function', () => {
      const artists = searchArtists('Incubus');

      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with correct URL', () => {
      const artists = searchArtists('Incubus');

      expect(fetchedStub).to.have.been.calledWith(
        `${API_URL}/search?q=Incubus&type=artist`
      );

      const artists2 = searchArtists('Muse');

      expect(fetchedStub).to.have.been.calledWith(
        `${API_URL}/search?q=Muse&type=artist`
      );
    });
  });

  describe('searchAlbums', () => {
    it('should call fetch function', () => {
      const albums = searchAlbums('Incubus');

      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with correct URL', () => {
      const albums = searchAlbums('Incubus');

      expect(fetchedStub).to.have.been.calledWith(
        `${API_URL}/search?q=Incubus&type=album`
      );

      const albums2 = searchAlbums('Muse');

      expect(fetchedStub).to.have.been.calledWith(
        `${API_URL}/search?q=Muse&type=album`
      );
    });
  });

  describe('searchTracks', () => {
    it('should call fetch function', () => {
      const tracks = searchTracks('Incubus');

      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with correct URL', () => {
      const tracks = searchTracks('Incubus');

      expect(fetchedStub).to.have.been.calledWith(
        `${API_URL}/search?q=Incubus&type=track`
      );

      const tracks2 = searchTracks('Muse');

      expect(fetchedStub).to.have.been.calledWith(
        `${API_URL}/search?q=Muse&type=track`
      );
    });
  });

  describe('searchPlaylists', () => {
    it('should call fetch function', () => {
      const playlists = searchPlaylists('Incubus');

      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with correct URL', () => {
      const playlists = searchPlaylists('Incubus');

      expect(fetchedStub).to.have.been.calledWith(
        `${API_URL}/search?q=Incubus&type=playlist`
      );

      const playlists2 = searchPlaylists('Muse');

      expect(fetchedStub).to.have.been.calledWith(
        `${API_URL}/search?q=Muse&type=playlist`
      );
    });
  });
});
