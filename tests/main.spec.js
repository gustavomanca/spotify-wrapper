import { expect } from "chai";
import {
  search,
  searchAlbums,
  searchArtists,
  searchTracks,
  searchPlaylists,
} from "../src/main";

describe("Spotify Wrapper", () => {
  describe("Smoke Tests", () => {
    // search (genérico) busca mais de um tipo
    // searchAlbums
    // searchArtist
    // searchTracks
    // searchPlaylists

    it("should exists search method", () => {
      expect(search).to.exist;
    });

    it("should exists searchAlbums method", () => {
      expect(searchAlbums).to.exist;
    });

    it("should exists searchArtists method", () => {
      expect(searchArtists).to.exist;
    });

    it("should exists searchTracks method", () => {
      expect(searchTracks).to.exist;
    });

    it("should exists searchPlaylists method", () => {
      expect(searchPlaylists).to.exist;
    });
  });
});
